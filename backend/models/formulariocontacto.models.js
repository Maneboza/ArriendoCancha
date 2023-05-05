const mongoose = require("mongoose");

const FormularioSchema = new mongoose.Schema({

    
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
        minlength: [3, "Debe tener mínimo 3 caracteres"]
    },

    email: {
        type: String,
        required:  [true, "El email es requerido"]
    },

    mensaje: {
        type: String,
        required:  [true, "El mensaje es requerido"],
        minlength: [5, "Debe tener mínimo 5 caracteres"]
    },
   
    
}, {timestamps: true});

const Formulario = mongoose.model("formulario", FormularioSchema);
module.exports = Formulario; 