const mongoose = require("mongoose");

const CanchaSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
}, {timestamps: true});

const Cancha  = mongoose.model("Canchas", CanchaSchema);
module.exports = Cancha; 