import { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import axios from 'axios';
import "./Register.css";

const Register = () => {
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
            Register
        </div>
    );
}

export default Register;