import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'



const ListarProfesores = () => {
    const [listaProfesores, setListaProfesores] = useState([{}]);   

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get("http://localhost:8000/profesor/listar").then(result => {
            console.log(result.data);
            setListaProfesores(result.data);
        });
    }, []);

    // const irAlCrear = () => {
    //     navigate("/asistir/");
    // }

    return (
      <div className="container text-center">
      <div className="row align-items-start">
    <div className="col"> 
  

            {
                listaProfesores.map((item, index) => {
                    return <div key={index.id} className="profesores">                      
                        <p><strong>Nombre:</strong> {item.nombre}</p>  
                        <p><strong>Nombre:</strong> {item._id}</p>   

                         <Link to={`/profesor/${item._id}`}>Details</Link>                                                                           
                    </div>
                })
            }

               
        </div>
      </div>
    </div>
    );
}

export default ListarProfesores;