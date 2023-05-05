const CanchaModel =  require("../models/reservacancha.model");

// module.exports.buscarDisponibilidadCancha = () =


module.exports.crearReservaCancha = async (request, response) => {
    let requestData = request.body;
    try {
        let nuevaReserva = await CanchaModel.create(requestData)
            response.json(nuevaReserva);
    } catch(error) {
        console.log('error creando reserva', {error})
        if (error.code == 11000) {
            error = {"message": "bloque ya  reservado"}
        };
    response.status(500).json(error);
    }
} 

module.exports.actualizarReservaCancha = async (request, response) => {
    var id = request.params.id;
    var data = request.body;
    await CanchaModel.findOneAndUpdate({"_id": id}, data);
    console.log("reserva encontrada y actualizada");
    response.json({
        "status": "ok"
    });
}