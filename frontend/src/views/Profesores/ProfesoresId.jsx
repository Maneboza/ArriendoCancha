import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import bgImage from "../../imagenes/fondos/imgFondo6.png";
import Card from 'react-bootstrap/Card';



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
      <div className="row align-items-start">
        <Card style={{ width: '30rem' }} >
          <Card.Text>
            <div className="col">
              {
                <div className="profesores">
                  <Card.Header> <p><strong>Nombre:</strong> {DetalleProfesores.nombre}</p></Card.Header>
                  <p><strong>Edad:</strong> {DetalleProfesores.edad}</p>
                  <p><strong>Días:</strong> {DetalleProfesores.dias}</p>
                  <p><strong>Horario:</strong>  {DetalleProfesores.horarioInicio} a {DetalleProfesores.horarioFin} </p>
                  <p><strong>Recomendación:</strong> {DetalleProfesores.recomendacion}</p>
                  <p><strong>Descripción:</strong> {DetalleProfesores.descripcion}</p>
                  <button onClick={`/reserva-clase/crear`}>Agendar</button>
                </div>
              }
            </div>
          </Card.Text>
        </Card>
      </div>
    </div>

  );
}

export default DetalleProfesores; 