const express = require("express");
const mongoose = require("mongoose");  
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const Profesores = require("./models/profesores.models");
const ReservaCancha= require("./models/reservacancha.model");
const ClaseModel= require("./models/reservaclase.model");
const Usuarios= require("./models/usuarios.models");

// const cors = require('cors')

// npm install adminjs
// npm install @adminjs/express
// npm install @adminjs/mongoose
// npm install tslib
// npm install express-formidable
// npm install express-session

// npm install adminjs @adminjs/express @adminjs/mongoose tslib express-formidable express-session

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
require('./routes/usuarios.routes')(app);

const ReservaCanchaRoutes = require('./routes/reservacancha.routes');
ReservaCanchaRoutes(app);

const ReservaClaseRoutes = require('./routes/reservaclase.routes');
ReservaClaseRoutes(app);

const ProfesoresRoutes = require('./routes/profesores.routes');
ProfesoresRoutes(app);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

AdminJS.registerAdapter(AdminJSMongoose)

const adminJS = new AdminJS({
  resources: [Profesores, ReservaCancha, ClaseModel, Usuarios ],
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
