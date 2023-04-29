const ProfesoresController = require("../controllers/profesores.controller");

module.exports = (app) => {
    app.get("/reserva/profesor", ProfesoresController.listarProfesores);
    app.get("/reserva/cancha", ProfesoresController.listarCalendarioProfesores);
} 