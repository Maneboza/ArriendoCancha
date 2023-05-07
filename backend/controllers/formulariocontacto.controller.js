const FormularioModel=  require("../models/formulariocontacto.models");


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}


module.exports.crearFormulario = async (request, response) => {
    const requestData = request.body;
    try {
        var newUser = await FormularioModel.create(requestData);    
        response.json(newUser);
    } catch(error) {
        console.log("no se pudo crear el usuario", error)
        response.json(error);
    }
}


module.exports.encontrarFormularioId = async (request, response) => {
    const id = request.params.id;
    const formularioEncontrado = await FormularioModel.findById({ _id: id });
    console.log("usuario encontrado");
    response.json(formularioEncontrado);
}

module.exports.loginFormulario = async (request, response) => {
    var requestBody = request.body;
    var formularioEncontrado = await FormularioModel.findOne({ email: "boza.marion@gmail.com", Nombre: "Maria" });
    console.log(formularioEncontrado);
    response.json({
        "status": "ok"
    });
}