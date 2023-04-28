<<<<<<< HEAD
const UsuariosController = require('../controllers/usuarios.controller');

module.exports = function(app){
    app.get('/api', UsuariosController.index);
    app.post('/usuarios/crear', UsuariosController.crearUsuario);
    app.get('/usuario/:id', UsuariosController.encontrarUsuarioId);
//     app.post("/usuarios/login", UsuariosController.loginUsuario);
}
=======
// //const usuariosController = require("../controllers/usuarios.controller");

// module.exports = (app) => {
//     app.post("/usuarios/crear", usuariosController.crearUsuario);
//     app.post("/usuarios/login", usuariosController.loginUsuario);

// }

>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a
