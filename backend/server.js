const express = require("express");
<<<<<<< HEAD
const mongoose = require("mongoose");  

// const AdminJS = require('adminjs');
// const AdminJSExpress = require('@adminjs/express');
// const AdminJSMongoose = require('@adminjs/mongoose');
// const eventosModel = require("./models/eventos");
// const usuariosModel = require("./models/usuarios.models");
// const cors = require('cors')
=======
const mongoose = require("mongoose");
//const AdminJS = require('adminjs');
//const AdminJSExpress = require('@adminjs/express');
//const AdminJSMongoose = require('@adminjs/mongoose');

//const cors = require('cors')
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a

// npm install adminjs
// npm install @adminjs/express
// npm install @adminjs/mongoose
// npm install tslib
// npm install express-formidable
// npm install express-session

// npm install adminjs @adminjs/express @adminjs/mongoose tslib express-formidable express-session

<<<<<<< HEAD
mongoose.connect("mongodb://0.0.0.0:27017/Clubensignabd", {
=======
mongoose.connect("mongodb://0.0.0.0:27017/arriendocanchabd", {
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a
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

<<<<<<< HEAD
// app.use(cors())



// AdminJS.registerAdapter(AdminJSMongoose)

// const adminJS = new AdminJS({
//   resources: [eventosModel, usuariosModel],
//   rootPath: '/admin'
// })
//const adminRouter = AdminJSExpress.buildRouter(adminJS)
// const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
//     adminJS,
//     {
//         cookieName: "adminjs",
//         cookiePassword: "complicatedsecurepassword",
//         authenticate: async (email, password) => {
//             if(email == "admin@gmail.com" && password == "123456"){
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//     },
//     null,
//     {
//         resave: false, 
//         saveUninitialized: true,
//     }
// );

// app.use(adminJS.options.rootPath, adminRouter);

const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
=======
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// const canchasRoutes = require("./routes/canchas.routes");
// canchasRoutes(app);

//const clasesRoutes = require("./routes/clases.routes");
//clasesRoutes(app);

// const usuariosRoutes = require("./routes/usuarios.routes");
//usuariosRoutes(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
>>>>>>> e20fc55820ea59d022d8227d6a574f963ee7b75a
})
