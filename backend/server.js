const express = require("express");
const mongoose = require("mongoose");
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const eventosModel = require("./models/eventos");
const usuariosModel = require("./models/usuariosEventos");
const cors = require('cors')

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
.catch(err => console.log("Hubo un error al conectarse a la bd"));

const app = express();
app.use(express.json());

app.use(cors())


const eventosRoutes = require("./routes/eventos.routes");
eventosRoutes(app);
const usuariosRoutes = require("./routes/usuarios.routes");
usuariosRoutes(app);


AdminJS.registerAdapter(AdminJSMongoose)

const adminJS = new AdminJS({
  resources: [eventosModel, usuariosModel],
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


const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
})
