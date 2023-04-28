import { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import axios from 'axios';
import "./ListarEventos.css";

const ListarEventos = () => {
    const [listaEventos, setListaEventos] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get("http://localhost:8000/eventos/listar").then(result => {
            console.log(result.data);
            setListaEventos(result.data);
        });
    }, []);

    const irAlCrear = () => {
        navigate("/asistir/");
    }

    return (
        <div style={{ "textAlign": "center",  }}>
            <br />


            <br />
            <br />
            {
                listaEventos.map((item, index) => {
                    return <div key={index} className="eventos">
                      
                        <p><strong>Nombre:</strong> {item.nombre}</p>
                        <p><strong>Fecha:</strong> {item.fecha}</p>
                        <p><strong>Ubicación:</strong> {item.ubicacion}</p>
                        <img style={{"box-shadow": "0 6px 10px 15px rgba(0, 0, 0, 0.2), 0 10px 20px 15px rgba(0, 0, 0, 0.19)"}} src={item.imageUrl} alt="Girl in a jacket" width="500" height="500" />
                        <br />
                        <br />
                        <button onClick="/asistir/${item._id}">Asistire</button>
                        <Link to={`/asistir/${item._id}`}>Asistire</Link>
                        <br />
                        <br />                                              
                    </div>
                })
            }
        </div>
    );
}

export default ListarEventos;