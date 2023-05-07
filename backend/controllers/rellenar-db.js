const mongoose = require("mongoose");  
const DisponibilidadCanchas = require("../models/disponibilidad-canchas.models");

const {
  addMonths,
  eachDayOfInterval,
  addMinutes,
  isBefore,
} = require("date-fns");

const connectToMongo = async () => {
  await mongoose
    .connect("mongodb://0.0.0.0:27017/Clubensignabd", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Se conectó correctamente a la bd"))
    .catch((err) => {
      console.log("Hubo un error al conectarse a la bd");
      console.log(err);
    });
};

const rellenarDB = async () => {
  const idCancha = "64567e921b1a68d4e02df1df"; // cancha: "los lagos"

  const startDate = new Date();
  const endDate = addMonths(startDate, 3);
  const blockDuration = 60;
  console.log("rango", { startDate, endDate });

  const dias = eachDayOfInterval({ start: startDate, end: endDate });

  const disponibilidades = [];

  dias.forEach((dia) => {
    const startOfDay = new Date(dia.setHours(8));
    const endOfDay = new Date(dia.setHours(21));

    let startTime = startOfDay;

    while (isBefore(startTime, endOfDay)) {
      const endTime = addMinutes(startTime, blockDuration);

      disponibilidades.push({
        idCancha,
        start: startTime,
        end: endTime,
      });

      startTime = endTime;
    }
  });
  console.log(`insertando ${disponibilidades.length} disponibilidades`);
  await DisponibilidadCanchas.insertMany(disponibilidades);
  console.log(`insertó ${disponibilidades.length} disponibilidades`);
};

connectToMongo().then(rellenarDB);
