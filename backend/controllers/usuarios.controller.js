const UsuariosModel =  require("../models/usuarios.models");


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.crearUsuario = async (request, response) => {
    console.log("request",request)
    var requestData = request.body;
    try {
        var newUser = await UsuariosModel.create(requestData);    
        response.json(newUser);
    } catch(error) {
        console.log("no se pudo crear el usuario", error)
        response.json(error);
    }
}

module.exports.encontrarUsuarioId = async (request, response) => {
    const id = request.params.id;
    const usuarioEncontrado = await UsuariosModel.findById({ _id: id });
    console.log("usuario encontrado");
    response.json(usuarioEncontrado);
}

module.exports.loginUsuario = async (request, response) => {
    
    var requestBody = request.body;
    console.log("requestBody",requestBody)
    // var usuarioEncontrado = await UsuariosModel.findOne({ email: "boza.marion@gmail.com", password: "12345678" });
    var usuarioEncontrado = await UsuariosModel.findOne(requestBody);
    console.log("usuarioEncontrado",usuarioEncontrado)
    console.log(usuarioEncontrado);
    response.json({
        "status": "ok"
    });
}