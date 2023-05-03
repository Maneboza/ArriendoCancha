// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "./CrearEventos.css";


// const CrearEventos = () => {
//     const navigate = useNavigate();
//     const [mensaje, setMensaje] = useState();

//     const CrearEventos = (e) => {
//         e.preventDefault();

//         if (e.target.nombre.value === "") {
//             setMensaje("Ingrese el nombre");
//             return;
//         } else if (e.target.precio.value == "") {
//             setMensaje("Ingrese correo de contacto");
//             return;
//         } else if (e.target.cantidad.value == "") {
//             setMensaje("Ingrese la su ubicacion");
//             return;
//         }

//         var data = {
//             nombre: e.target.nombre.value,
//             precio: e.target.fecha.value,
//             cantidad: e.target.ubicacion.value,
//         }

//         axios.post("http://localhost:8000/eventos/crear", data)
//             .then(result => {
//                 setMensaje("Usuario agregado!");
//             })
//             .catch(error => console.log(error));
//     }

//     const irAlListado = () => {
//         navigate("/");
//     }

//     return (
//         <div style={{ "textAlign": "center", "backgroundColor": "black", "color": "aliceblue" }}>
//             <h4>¡Ingresa tus datos!</h4>
//             <p>Deja tus datos para que otros rockeros te puedan contactar y así armar su Rock and Roadie group.</p>
//             <form onSubmit={CrearEventos}>
//                 <label for="fname">Nombre</label>
//                 <br />
//                 <input type="text" required name="" id="nombre" />
//                 <br />
//                 <label for="fname">Correo</label>
//                 <br />
//                 <input type="text" required name="" id="precio" />
//                 <br />
//                 <label for="fname">Ubicacion</label>
//                 <br />
//                 <input type="text" required name="" id="cantidad" />
//                 <br />
//                 {mensaje}
//                 <br />
//                 <button type="submit" className="btn btn-danger">Enviar mis datos</button>
//             </form>
//             <br />
//             <button style={{"margin-right":"50rem"}} onClick={irAlListado}>HOME</button>
//             <Link to={"/"}> Listado </Link>
//         </div>
//     );
// }

// export default CrearEventos;