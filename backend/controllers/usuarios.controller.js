// const UsuariosModel =  require("../models/usuarios.models");

// module.exports.crearUsuario = async (request, response) => {
//     var requestData = request.body;

//     try {
//         var newUser = await UsuariosModel.create(requestData);    
//         response.json(newUser);
//     } catch(error) {
//         response.json(error);
//     }
// }

// module.exports.loginUsuario = async (request, response) => {
//     var requestBody = request.body;

//     var usuarioEncontrado = await UsuariosModel.findOne({ email: "boza.marion@gmail.com", password: "12345678" });

//     console.log(usuarioEncontrado);

//     response.json({
//         "status": "ok"
//     });
// }