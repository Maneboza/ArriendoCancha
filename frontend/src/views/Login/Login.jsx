// import { useEffect, useState } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from 'axios';
import "./Login.css";

import bgImage from "../../imagenes/fondos/imgFondo9.png";

const Login = () => {
    // const [listaEventos, setListaEventos] = useState([{}]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("Inicio el componente");
    //     axios.get("http://localhost:8000/eventos/listar").then(result => {
    //         console.log(result.data);
    //         setListaEventos(result.data);
    //     });
    // }, []);

    // const irAlCrear = () => {
    //     navigate("/asistir/");
    // }

    return (
        <div >
            <img className="bg-img" src={bgImage} alt="Bg" />
        </div>
    );
}

export default Login;