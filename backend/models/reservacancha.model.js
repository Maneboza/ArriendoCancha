const mongoose = require("mongoose");

const ReservaCanchaSchema = new mongoose.Schema({
	idUsuario: {
		type: String,
		required: true
	},
	hora: {
		type: String,
		required: true
	},
	dia: {
		type: String,
		required: true
	},
	mes: {
		type: String,
		required: true
	},
	codigoTransaccion: {
		type: String,
		required: true
	},

}, {timestamps: true});

const ReservaCancha = mongoose.model("reservaCancha", ReservaCanchaSchema);
module.exports = ReservaCancha;
