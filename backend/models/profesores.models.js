const mongoose = require("mongoose");

const ProfesoresSchema = new mongoose.Schema({

    imageURL: {
        type: String,
    },
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    edad: {
        type: Number,
    },
    dias: {
        type: String,
    },
    horarioInicio: {
        type: String,
    },
    horarioFin: {
        type: String,
    },
    recomendacion: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    valorClase:{
        type: String
    },
    
    
}, {timestamps: true});

const Profesores = mongoose.model("profesores", ProfesoresSchema);
module.exports = Profesores; 