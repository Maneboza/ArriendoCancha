const ProfesoresController = require("../controllers/profesores.controller");

module.exports = (app) => {
    app.post("/profesor/crear", ProfesoresController.crearProfesores);
    app.get("/profesor/listar", ProfesoresController.listarProfesores);
    app.get("/profesor/:id", ProfesoresController.detalleProfesores);
}
