import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import bgImage from "../../imagenes/fondos/imgFondo8.png";
import axios from "axios";
import '../FormularioContacto/FormularioContacto.css'


const Formulario = () => {
    const [Formulario, setFormulario] = useState([{}]);
    const navigate = useNavigate() 

    useEffect(() => {
        console.log("Inicio el componente");
        axios.post('http://localhost:8000/formulario/crear').then(result => {
        console.log(result.data);
        setFormulario(result.data);
        });
    }, []);
    async function formulario (ev) {
        ev.preventDefault()
        try {
            navigate('/')
        }
        catch(err){
            alert(err.response.data.error)
                return
        }
            
    }


    return (

<div className="container py-4">

<img className="bg-img" src={bgImage} alt="Bg" />
  <form id="contactForm" >

    
    <div className="mb-3">
      <label className="form-label" htmlFor="name">Nombre</label>
      <input className="form-control" id="name" type="text" placeholder= "nombre" data-sb-validations="required" />
      <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
    </div>

   
    <div className="mb-3">
      <label className="form-label" htmlFor="emailAddress">Email</label>
      <input className="form-control" id="emailAddress" type="email" placeholder= "email" data-sb-validations="required, email" />
      <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
      <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
    </div>

    <div className="mb-3">
      <label className="form-label" htmlFor="message">Mensaje</label>
      <textarea className="form-control" id="message" type="text" placeholder="mensaje" data-sb-validations="required"></textarea>
      <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
    </div>

    
    <div className="d-none" id="submitSuccessMessage">
      <div className="text-center mb-3">Form submission successful!</div>
    </div>

   
    <div className="d-none" id="submitErrorMessage">
      <div className="text-center text-danger mb-3">Error sending message!</div>
    </div>

   
    <div className="d-grid">
      <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
    </div>

  </form>

</div>
    );
}


export default Formulario