const mongoose = require("mongoose");

const ReservasSchema = new mongoose.Schema({
	idUsuario:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
	
	idCancha:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cancha'
    },

	idDisponibilidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DisponibilidadCanchas'
    },

	codigoTransaccion: {
		type: String,
		required: true,
        unique: true
	},

}, {timestamps: true});

const Reserva = mongoose.model("Reservas", ReservasSchema);
module.exports = Reserva;
