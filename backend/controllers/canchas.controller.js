<<<<<<< HEAD
// const CanchasModel = require("../models/canchas");
// const {Router} = require('express')
=======
//const ReservasModel = require("../models/reservas.models");
const {Router} = require('express')
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a

// const router = Router()

// router.get('/', (req, res) => {
//     res.json({message: 'Saludos desde el Servidor'}) 
// })

<<<<<<< HEAD
// module.exports.listarCanchas = async (request, response) => {
//     var result = await CanchasModel.find();
//     response.json(result);
// }

// module.exports.crearCanchas = async (request, response) => {
//     var data = request.body;
    
//     var nuevoCanchas = new CanchasModel(data);
//     var result = await nuevoCanchas.save();
=======
// module.exports.listarCalendario = async (request, response) => {
//     const reserva = await ReservasModel.find(request.query);
//     return response.json(reserva );
// }

// module.exports.crearReservas = async (request, response) => {
//     var data = request.body;
    
//     var nuevoReservas = new ReservasModel(data);
//     var result = await nuevoReservas.save();
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a

//     response.json(result);
// }

<<<<<<< HEAD
// module.exports.actualizarCanchas = async (request, response) => {
//     var id = request.params.canchasId;
//     var data = request.body;

//     await CanchasModel.findOneAndUpdate({"_id": id}, data);
=======
// module.exports.actualizarReservas = async (request, response) => {
//     var id = request.params.reservasId;
//     var data = request.body;

//     await ReservasModel.findOneAndUpdate({"_id": id}, data);
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a

//     response.json({
//         "status": "ok"
//     });
// }

<<<<<<< HEAD
// module.exports.detalleCanchas = async (request, response) => {
//     var id = request.params.profesoresId;
//     var canchas = await CanchasModel.findOne({_id: id});
//     response.json(canchas);
=======
// module.exports.detalleReservas = async (request, response) => {
//     var id = request.params.reservasId;
//     var reservas = await ReservasModel.findOne({_id: id});
//     response.json(reservas);
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a
// }