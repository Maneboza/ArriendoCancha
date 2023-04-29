const profesoresController = require("../controllers/reservas.controller");

module.exports = (app) => {
    app.post("/reserva/crear/profesor", profesoresController.crearReservaProfesor);
    app.post("/reserva/crear/cancha", profesoresController.crearReservaCancha);
    app.put("/reserva/actualizar/:Id", profesoresController.actualizarReserva);
    
}