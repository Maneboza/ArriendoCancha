const ProfesoresModel = require("../models/profesores.models");

module.exports.listarProfesores = async (request, response) => {
    var result = await ProfesoresModel.find();
    response.json(result);
}

module.exports.crearProfesores = async (request, response) => {
    var requestData = request.body;

    try {
        var newProfesores = await ProfesoresModel.create(requestData);
        response.json(newProfesores);
    } catch(error) {
        console.log("no se pudo crear el usuario", error)
        response.json(error);
    }
}

module.exports.detalleProfesores = async (request, response) => {
    const id = request.params.id;
    const usuarioEncontrado = await ProfesoresModel.findById({ _id: id });
    console.log("usuario encontrado");
    response.json(usuarioEncontrado);
}