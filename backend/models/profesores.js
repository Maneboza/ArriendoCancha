const mongoose = require("mongoose");

const ProfesoresSchema = new mongoose.Schema({
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

    horarios: {
        type: Number,
    },

    recomendacion: {
        type: String,
    },
   
    descripcion: {
        type: String,
    },

    valorClase:{
        type: String
    }
    
});

const Profesores = mongoose.model("profesores", ProfesoresSchema);
module.exports = Profesores; 