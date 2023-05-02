import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const DetalleProfesores = () => {
    const [DetalleProfesores, setDetalleProfesores] = useState([{}]);   
    const {id} = useParams()

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get('http://localhost:8000/profesor/'+id).then(result => {
            console.log(result.data);
            setDetalleProfesores(result.data);
        });
    }, [id]);

    return (
      <div className="container text-center">
      <div className="row align-items-start">
    <div className="col"> 
            {
                <div className="profesores">                      
                        <p><strong>Nombre:</strong> {DetalleProfesores.nombre}</p>
                        <p><strong>Edad:</strong> {DetalleProfesores.edad}</p>
                        <p><strong>Días:</strong> {DetalleProfesores.dias}</p>
                        <p><strong>Horario:</strong>  {DetalleProfesores.horarioInicio} a {DetalleProfesores.horarioFin} </p>
                        <p><strong>Recomendación:</strong> {DetalleProfesores.recomendacion}</p>
                        <p><strong>Descripción:</strong> {DetalleProfesores.descripcion}</p>                                                                  
                    </div>
            }
        </div>
      </div>
    </div>
    );
}

export default DetalleProfesores; 