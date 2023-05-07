const CanchasModel = require("../models/canchas.models");
const DisponibilidadCanchas = require("../models/disponibilidad-canchas.models");
const Reserva = require("../models/reservas-canchas.model")
const dateFns = require("date-fns");
const mongoose = require("mongoose"); 


module.exports.crearCancha = async (request, response) => {
  const { nombre } = request.body;
  try {
    const newCancha = await CanchasModel.create({ nombre });
    response.status(200).json(newCancha);
  } catch (error) {
    console.log("no se pudo crear la cancha", error);
    response.status(500).json(error);
  }
};


// no se utiliza, se van a crear desde el script rellenar-db.js

// module.exports.crearDisponibilidad = async (request, response) => {
//   const { id } = request.params;
//   const { start, end } = request.body;

//   const cancha = await CanchasModel.findById(id);

//   if (!cancha) {
//     return response.status(404).json({ error: "La cancha no existe" });
//   }

//   const duracionEnMinutos = dateFns.durationInMinutes(end, start);

//   if (duracionEnMinutos !== 60) {
//     return response
//       .status(400)
//       .json({ error: "Sólo se permiten bloques de 60 minutos" });
//   }

//   const disponibilidadesQueSobrelapan = await DisponibilidadCanchas.findOne({
//     idCancha: id,
//     start: { $lte: end }, // empezaron antes que esta termine
//     end: { $gte: start }, // y terminen despues que esta comience
//   });

//   if (disponibilidadesQueSobrelapan) {
//     return response
//       .status(400)
//       .json({ error: "Está disponibilidad en conflicto con otra" });
//   }

//   const disponibilidad = await DisponibilidadCanchas.create({ id, start, end });

//   return response.status(200).json(disponibilidad);
// };


module.exports.buscarDisponibilidad = async (request, response) => {
  const { id } = request.params;
  const { fecha } = request.query;

  const cancha = await CanchasModel.findById(id);

  if (!cancha) {
    return response.status(404).json({ error: "La cancha no existe" });
  }

  const date = dateFns.parse(fecha, "yyyy-MM-dd", new Date());

  const disponibilidades = await DisponibilidadCanchas.find({
    idCancha: id,
    start: { $gte: dateFns.startOfDay(date) }, 
    end: { $lte: dateFns.endOfDay(date) },
  });

  response.status(200).json(disponibilidades);
};

module.exports.disponibilidadTotal = async (request, response) => {
  var result = await DisponibilidadCanchas.find();
  response.json(result);
}

module.exports.crearReservaCancha = async (request, response) => {
  const { id } = request.params;
  const { idDisponibilidad, codigoTransaccion } = request.body;

  const cancha = await CanchasModel.findById(id);

  if (!cancha) {
    return response.status(404).json({ error: "La cancha no existe" });
  }

  
  const disponibilidad = await DisponibilidadCanchas.findById(idDisponibilidad);

  if (!disponibilidad) {
    return response
      .status(409)
      .json({ error: "La disponibilidad ya no existe" });
  }

  try {
    /* 
    hacemos una transaccion para que ocurran ambas cosas o ninguna, 
    no queremos datos huerfanos
    */
    const session = await mongoose.connection.startSession()
    session.startTransaction();

    const nuevaReserva = await Reserva.create({
      idCancha: id,
      idDisponibilidad,
      codigoTransaccion,
      idUsuario: '6450324db5a5b800f3798778'// TODO: deberia salir del jwt token de autenticacion   // "Juan lira"
    });
    await DisponibilidadCanchas.findOneAndDelete({ _id: idDisponibilidad });
    response.status(200).json(nuevaReserva);
  } catch (error) {
    console.log("error creando reserva", { error });
    response.status(500).json(error);
  }
};
