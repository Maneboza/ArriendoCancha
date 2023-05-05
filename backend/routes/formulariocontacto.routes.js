const FormularioController = require('../controllers/formularioContacto.controller');

module.exports = (app) => {
    app.get('/api', FormularioController.index);
    app.post('/formulario/crear', FormularioController.crearFormulario);
    app.get('/formulario/:id', FormularioController.encontrarFormularioId);
    
}
