const CanchaController = require('../controllers/cancha.controllers');


module.exports = (app) => {
    app.post("/cancha", CanchaController.crearCancha);
    // app.post("/cancha/:id/disponibilidad", CanchaController.crearDisponibilidad)
    app.get("/cancha/:id/disponibilidad/", CanchaController.buscarDisponibilidad);
    app.post("/cancha/:id/reservar", CanchaController.crearReservaCancha)
    app.get("/cancha/disponibilidadtotal/", CanchaController.disponibilidadTotal);
}
