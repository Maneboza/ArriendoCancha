const UsuariosController = require('../controllers/usuarios.controller');

module.exports = (app) => {

    app.post('/usuarios/registro', UsuariosController.registroUsuario);
    app.post("/usuarios/login", UsuariosController.loginUsuario);
    // app.post('/usuarios/crear', UsuariosController.crearUsuario);
    app.get('/usuario/:id', UsuariosController.encontrarUsuarioId);
}

