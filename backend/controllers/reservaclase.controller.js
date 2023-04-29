const ClaseModel =  require("../models/reservaclase.model");

module.exports.crearReservaClase = async (request, response) => {
    let requestData = request.body;
    try {
        let nuevaReserva = await ClaseModel.create(requestData)
            response.json(nuevaReserva);
    } catch(error) {
        console.log('error creando reserva', {error})
        if (error.code == 11000) {
            error = {"message": "bloque ya  reservado"}
        };
    response.status(500).json(error);
    }
} 

module.exports.actualizarReservaClase = async (request, response) => {
    var id = request.params.id;
    var data = request.body;
    await ClaseModel.findOneAndUpdate({"_id": id}, data);
    console.log("reserva encontrada y actualizada");
    response.json({
        "status": "ok"
    });
}

