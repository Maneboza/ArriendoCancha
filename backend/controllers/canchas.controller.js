//const ReservasModel = require("../models/reservas.models");
const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'Saludos desde el Servidor'}) 
})

// module.exports.listarCalendario = async (request, response) => {
//     const reserva = await ReservasModel.find(request.query);
//     return response.json(reserva );
// }

// module.exports.crearReservas = async (request, response) => {
//     var data = request.body;
    
//     var nuevoReservas = new ReservasModel(data);
//     var result = await nuevoReservas.save();

//     response.json(result);
// }

// module.exports.actualizarReservas = async (request, response) => {
//     var id = request.params.reservasId;
//     var data = request.body;

//     await ReservasModel.findOneAndUpdate({"_id": id}, data);

//     response.json({
//         "status": "ok"
//     });
// }

// module.exports.detalleReservas = async (request, response) => {
//     var id = request.params.reservasId;
//     var reservas = await ReservasModel.findOne({_id: id});
//     response.json(reservas);
// }