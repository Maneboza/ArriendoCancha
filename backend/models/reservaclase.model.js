const mongoose = require("mongoose");

const ReservaClaseSchema = new mongoose.Schema({
	mes: {
		type: String,
		required: true
	},
	dia: {
		type: String,
		required: true
	},
	hora: {
		type: String,
		required: true
	},
	idUsuario: {
		type: String,
		required: true
	},
    idProfesor: {
		type: String,
		required: true
	},
	codigoTransaccion: {
		type: String,
		required: true
	}
}, {timestamps: true});

const ReservaClase = mongoose.model("reservaClase", ReservaClaseSchema);
module.exports = ReservaClase;