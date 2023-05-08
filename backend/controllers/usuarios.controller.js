const UsuariosModel =  require("../models/usuarios.models");
const bcrypt = require('bcrypt'); 


module.exports.registroUsuario = async function (request, response) {
    const requestData = request.body;

    if (request.body.clave != request.body.claveConfirm) {
        return response.json ({ error: "la contraseña no coincide"}, 401)
    }
    try {
        const claveEncriptada  = await bcrypt.hash(request.body.clave, 10)
        const claveConfirmEncriptada   = await bcrypt.hash(request.body.clave, 10)
        const newUser = await UsuariosModel.create({...requestData, clave: claveEncriptada, claveConfirm: claveConfirmEncriptada})   
            return response.json( { _id: newUser._id })
    } catch(error) {
        console.log(error)
        if (error.code == 11000) {
            return response.json ({error: 'Este email ya está registrado'}, 401)
        }
        response.json(error, 400);
    }
}

module.exports.loginUsuario = async (request, response) => {
    var requestBody = request.body;
    var usuarioEncontrado = await UsuariosModel.findOne(requestBody);
    console.log(usuarioEncontrado)
    if(!usuarioEncontrado)
    {
        response.json({
            "status": "NO OK"
        });
    } else
    {
        response.json({
            "status": "OK"
        });
    }    
}

module.exports.encontrarUsuarioId = async (request, response) => {
    const id = request.params.id;
    const usuarioEncontrado = await UsuariosModel.findById({ _id: id });
    console.log("usuario encontrado");
    response.json(usuarioEncontrado);
}




// module.exports.crearUsuario = async (request, response) => {
//     console.log("request",request)
//     const requestData = request.body;
//     const clave = await bcrypt.hash(clave, 10)
//     try {
//         const newUser = await UsuariosModel.create(requestData);    
//         response.json(newUser);
//     } catch(error) {
//         console.log("no se pudo crear el usuario", error)
//         response.json(error);
//     }
// }

