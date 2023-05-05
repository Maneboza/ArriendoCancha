const mongoose = require("mongoose");

const CanchaSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    dia: {
        type: String,
    },
    hora: {
        type: String,
    },
    disponible: {
        type: Boolean,
    }

}, {timestamps: true});

const Cancha  = mongoose.model("cancha", CanchaSchema);
module.exports = Cancha; 