import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import bgImage from "../../imagenes/fondos/imgFondo6.png";




const DetalleProfesores = () => {
  const [DetalleProfesores, setDetalleProfesores] = useState([{}]);
  const { id } = useParams()

  useEffect(() => {
    console.log("Inicio el componente");
    axios.get('http://localhost:8000/profesor/' + id).then(result => {
      console.log(result.data);
      setDetalleProfesores(result.data);
    });
  }, [id]);

  return (
    <div className="container text-center">
      <img className="bg-img" src={bgImage} alt="Bg" />
      <div className="row">
    
        <div className="col">
       
          {  
            
            <div className="profesores">
             <img className="card-img-center" src={DetalleProfesores.imageURL} alt="teacherimage" style={{height:300}} /> 
              <p><strong>Nombre:</strong> {DetalleProfesores.nombre}</p>
              <p><strong>Edad:</strong> {DetalleProfesores.edad}</p>
              <p><strong>Días:</strong> {DetalleProfesores.dias}</p>
              <p><strong>Horario:</strong>  {DetalleProfesores.horarioInicio} a {DetalleProfesores.horarioFin} </p>
              <p><strong>Recomendación:</strong> {DetalleProfesores.recomendacion}</p>
              <p><strong>Descripción:</strong> {DetalleProfesores.descripcion}</p>
              <Link to='/stepper'>
                <button>Agendar</button>
              </Link>

            </div>
          }
        </div>

      </div>
      <div>
        <Link to='/stepper'>
          <button>Volver</button>
        </Link>
      </div>
    </div>


  );

}

export default DetalleProfesores; 