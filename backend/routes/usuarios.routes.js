const UsuariosController = require('../controllers/usuarios.controller');

module.exports = function(app){
    app.get('/api', UsuariosController.index);
    app.post('/usuarios/crear', UsuariosController.crearUsuario);
    app.get('/usuario/:id', UsuariosController.encontrarUsuarioId);
//     app.post("/usuarios/login", UsuariosController.loginUsuario);
}