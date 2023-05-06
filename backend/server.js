const express = require("express");
const mongoose = require("mongoose");  
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const Profesores = require("./models/profesores.models");
const CanchasModel = require("./models/canchas.models");
// const ClaseModel= require("./models/reservaclase.model");
const Usuarios= require("./models/usuarios.models");
const Formulario= require("./models/formulariocontacto.models")
const cors = require("cors");
const Cancha = require("./models/canchas.models")
const Reserva = require ("./models/reservas-canchas.model")
const DisponibilidadCanchas = require ("./models/disponibilidad-canchas.models")


mongoose.connect("mongodb://0.0.0.0:27017/Clubensignabd", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => {
    console.log("Hubo un error al conectarse a la bd")
    console.log(err)
});



const app = express();
app.use(express.json());
app.use(cors());


require('./routes/usuarios.routes')(app);
const CanchaRoutes = require('./routes/cancha.routes');
CanchaRoutes(app);
// const ReservaClaseRoutes = require('./routes/reservaclase.routes');
// ReservaClaseRoutes(app);
const ProfesoresRoutes = require('./routes/profesores.routes');
ProfesoresRoutes(app);
const FormularioRoutes = require('./routes/formulariocontacto.routes');
FormularioRoutes(app);
const LoginRoutes = require ('./routes/usuarios.routes');
LoginRoutes (app);


AdminJS.registerAdapter(AdminJSMongoose)

const adminJS = new AdminJS({
    resources: [Profesores, CanchasModel, Usuarios, Formulario, Cancha, Reserva, DisponibilidadCanchas ],
    rootPath: '/admin'
})
//const adminRouter = AdminJSExpress.buildRouter(adminJS)
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJS,
    {
        cookieName: "adminjs",
        cookiePassword: "complicatedsecurepassword",
        authenticate: async (email, password) => {
            if(email == "admin@gmail.com" && password == "123456"){
                return true;
            } else {
                return false;
            }
        },
    },

    null,
    {
        resave: false, 
        saveUninitialized: true,
    }
);

app.use(adminJS.options.rootPath, adminRouter);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
