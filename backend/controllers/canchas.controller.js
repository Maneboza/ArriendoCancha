const CanchasModel = require("../models/canchas");
const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'Saludos desde el Servidor'}) 
})

module.exports.listarCanchas = async (request, response) => {
    var result = await CanchasModel.find();
    response.json(result);
}

module.exports.crearCanchas = async (request, response) => {
    var data = request.body;
    
    var nuevoCanchas = new CanchasModel(data);
    var result = await nuevoCanchas.save();

    response.json(result);
}

module.exports.actualizarCanchas = async (request, response) => {
    var id = request.params.canchasId;
    var data = request.body;

    await CanchasModel.findOneAndUpdate({"_id": id}, data);

    response.json({
        "status": "ok"
    });
}

module.exports.detalleCanchas = async (request, response) => {
    var id = request.params.profesoresId;
    var canchas = await CanchasModel.findOne({_id: id});
    response.json(canchas);
}