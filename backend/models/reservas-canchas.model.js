const mongoose = require("mongoose");

const ReservasSchema = new mongoose.Schema({
	idUsuario:  {
        type: String,
        
    },
	
	idDisponibilidad: {
       type: String, 
       ref: 'DisponibilidadCanchas'
    },

	codigoTransaccion: {
		type: String,
       unique: true
	},

}, {timestamps: true});

const Reserva = mongoose.model("Reservas", ReservasSchema);
module.exports = Reserva;
