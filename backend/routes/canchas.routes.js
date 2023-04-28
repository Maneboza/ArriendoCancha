const canchasController = require("../controllers/canchas.controller");

module.exports = (app) => {
    app.get("/canchas", canchasController.listarCanchas);
    app.post("/canchas/crear", canchasController.crearCanchas);
    app.put("/canchas/actualizar/:canchasId", canchasController.actualizarCanchas);
    app.get("/canchas/detalle/:canchasId", canchasController.detalleCanchas);
}

