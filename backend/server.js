const express = require("express");

const mongoose = require("mongoose");  

// const AdminJS = require('adminjs');
// const AdminJSExpress = require('@adminjs/express');
// const AdminJSMongoose = require('@adminjs/mongoose');
// const eventosModel = require("./models/eventos");
// const usuariosModel = require("./models/usuarios.models");
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


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
