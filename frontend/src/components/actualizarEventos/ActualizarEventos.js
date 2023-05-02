// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import "./ActualizarEventos.css"


// const ActualizarEventos = () => {
//     var { idEventos } = useParams();
//     const [nombre, setNombre] = useState();
//     const [fecha, setFecha] = useState();
//     const [ubicacion, setUbicacion] = useState();

//     useEffect(() => {
//         console.log(idEventos);
//         axios.get("http://localhost:8000/eventos/detalle/" + idEventos)
//         .then((response) => {
//             console.log(response.data.nombre);
//             console.log(response.data.fecha);
//             console.log(response.data.ubicacion);

//             setNombre(response.data.nombre);
//             setFecha(response.data.fecha);
//             setUbicacion(response.data.ubicacion);
//         });
//     }, []);

//     const editar = (e) => {
//         e.preventDefault();

//         var datos = {
//             nombre: nombre,
//             fecha: fecha,
//             ubicacion: ubicacion
//         };

//         axios.put("http://localhost:8000/eventos/actualizar/" + idEventos, datos)
//         .then((response) => {
//             if(response.status == 200){
//                 //retornamos a la lista
//             }
//         });
//     }

//     return(
//         <div>
//             <form onSubmit={editar}>
//                 <div className="input-group">
//                     <span className="input-group-text" id="basic-addon3">Nombre</span>
//                     <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" aria-describedby="basic-addon3 basic-addon4"/>
//                 </div>
//                 <div className="input-group">
//                     <span className="input-group-text" id="basic-addon3">Feca</span>
//                     <input type="text" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} id="fecha" aria-describedby="basic-addon3 basic-addon4"/>
//                 </div>
//                 <div className="input-group">
//                     <span className="input-group-text" id="basic-addon3">Ubicacion</span>
//                     <input type="text" className="form-control" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} id="ubicacion" aria-describedby="basic-addon3 basic-addon4"/>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Editar</button>
//             </form>
//         </div>
//     );
// }

// export default ActualizarEventos;