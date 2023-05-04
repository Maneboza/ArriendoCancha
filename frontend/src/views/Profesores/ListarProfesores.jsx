import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import bgImage from "../../imagenes/fondos/imgFondo7.png";
import Card from 'react-bootstrap/Card';
import './ListarProfesores.css';
import profileimg from '../../imagenes/profesores/profe3.png'


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
      <div className="row align-items-start">
        <div className="col">

            <Card style={{ width: '20rem' }} >
              <img className="profilepic" src={profileimg} alt="pp" />
              <Card.Body>
                {
                  listaProfesores.map((item, index) => {
                    return <div key={index} className="profesores">
                      <p><strong>Nombre:</strong> {item.nombre}</p>
                    <Link className="btn-page" to={`/profesor/${item._id}`}> Detalle </Link>
                    </div>
                  })
                }
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }} >
              <img className="profilepic" src={profileimg} alt="pp" />
              <Card.Body>
                {
                  listaProfesores.map((item, index) => {
                    return <div key={index} className="profesores">
                      <p><strong>Nombre:</strong> {item.nombre}</p>
                    <Link className="btn-page" to={`/profesor/${item._id}`}> Detalle </Link>
                    </div>
                  })
                }
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }} >
              <img className="profilepic" src={profileimg} alt="pp" />
              <Card.Body>
                {
                  listaProfesores.map((item, index) => {
                    return <div key={index} className="profesores">
                  
                    <Link className="btn-page" to={`/profesor/${item._id}`}> Detalle </Link>
                    </div>
                  })
                }
              </Card.Body>
            </Card>
           
        </div>
      </div>
    </div>


  );

}

export default ListarProfesores;