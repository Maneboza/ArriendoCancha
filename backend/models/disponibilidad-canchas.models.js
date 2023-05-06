const mongoose = require("mongoose");

const DisponibilidadCanchasSchema = new mongoose.Schema(
  {
    idCancha: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Canchas",
    },
    start: {
      type: Date, // 05/05/2023 17:00:00
    },

    end: {
      type: Date, // 05/05/2023 17:30:00
    },
  },
  { timestamps: true }
);

const DisponibilidadCanchas = mongoose.model(
  "DisponibilidadCanchas",
  DisponibilidadCanchasSchema
);

module.exports = DisponibilidadCanchas;
