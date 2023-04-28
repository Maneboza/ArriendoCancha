const profesoresController = require("../controllers/profesores.controller");

module.exports = (app) => {
    app.get("/cancha", eventosController.listarEventos);
    app.post("/eventos/crear", eventosController.crearEventos);
    app.put("/eventos/actualizar/:eventosId", eventosController.actualizarEventos);
    app.get("/eventos/detalle/:eventosId", eventosController.detalleEventos);
}