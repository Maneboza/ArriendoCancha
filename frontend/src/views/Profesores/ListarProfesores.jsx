import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import bgImage from "../../imagenes/fondos/imgFondo7.png";
import Card from 'react-bootstrap/Card';
import './ListarProfesores.css';
import profileimg3 from '../../imagenes/profesores/profe3.png'




const ListarProfesores = () => {
  const [listaProfesores, setListaProfesores] = useState([{}]);

  useEffect(() => {
    console.log("Inicio el componente");
    axios.get("http://localhost:8000/profesor/listar").then(result => {
      console.log(result.data);
      setListaProfesores(result.data);
    });
  }, []);

  return (

    <div className="container text-center">
      <img className="bg-img" src={bgImage} alt="Bg" />
     
      
        <div className="row">
          <div className="col">
            {listaProfesores.map((item, index) =>
             
              <Card className="card" key={index}  >
                <img className="profilepic" src={profileimg3} alt="pp" />            
                <div key={index} className="profesores">
                  <p><strong>Nombre:</strong> {item.nombre}</p>
                  <p><strong>Días:</strong> {item.dias}</p>
                  <p><strong>Horario:</strong> {item.horarioInicio} a {item.horarioFin}  </p>
                  <Link className="btn-page" to={`/profesor/${item._id}`}> Detalle </Link>     
                  <Link to='profesor/:id/reserva-clase/crear'> Agendar          </Link>                  
                </div>
              </Card>
               
              
             

              
            
            )}
          </div>
        </div>
        
    </div>
  );
}

export default ListarProfesores;