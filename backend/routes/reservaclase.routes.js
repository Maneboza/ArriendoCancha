const ClaseController = require("../controllers/reservaclase.controller");

module.exports = (app) => {
    app.post("/reserva-clase/crear", ClaseController.crearReservaClase);
    app.post("/reserva-clase/validar-fecha-hora/:id", ClaseController.actualizarReservaClase);
    // app.get ("/reserva-cancha/listar-reserva", CanchaController.listarReservaCanchaId);
}
