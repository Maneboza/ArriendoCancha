const mongoose = require("mongoose");

const ReservasSchema = new mongoose.Schema({
	idCancha: {
		type: Number,
		required: true
	},

	hora: {
		type: String
	},

	dia: {
		type: String
	},

	mes: {
		type: String
	},


});

const Reservas = mongoose.model("reservas", ReservasSchema);
module.exports = Reservas;