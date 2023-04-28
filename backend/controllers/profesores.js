const ProfesoresModel = require("../models/Profesores");
const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'Saludos desde el Servidor'}) 
})

module.exports.listarProfesores = async (request, response) => {
    var result = await ProfesoresModel.find();
    response.json(result);
}

module.exports.crearProfesores = async (request, response) => {
    var data = request.body;
    
    var nuevoProfesores = new ProfesoresModel(data);
    var result = await nuevoProfesores.save();

    response.json(result);
}

module.exports.actualizarProfesores = async (request, response) => {
    var id = request.params.profesoresId;
    var data = request.body;

    await ProfesoresModel.findOneAndUpdate({"_id": id}, data);

    response.json({
        "status": "ok"
    });
}

module.exports.detalleProfesores = async (request, response) => {
    var id = request.params.profesoresId;
    var profesores = await ProfesoresModel.findOne({_id: id});
    response.json(profesores);
}