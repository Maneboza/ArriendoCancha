const CanchaController = require("../controllers/reservacancha.controller");

module.exports = (app) => {
    
    app.post("/reserva-cancha/crear", CanchaController.crearReservaCancha);
    app.post("/reserva-cancha/validar-fecha-hora/:id", CanchaController.actualizarReservaCancha);
    // app.get ("/reserva-cancha/listar-reserva", CanchaController.listarReservaCanchaId);
}
