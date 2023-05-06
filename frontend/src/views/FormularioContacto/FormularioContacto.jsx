import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useEffect } from "react";
import bgImage from "../../imagenes/fondos/imgFondo8.png";
import axios from "axios";
import '../FormularioContacto/FormularioContacto.css'


const Formulario = () => {
    const navigate = useNavigate() 
    
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    async function register (ev) {
        ev.preventDefault()
        try {
        const resp = await axios.post('http://localhost:8000/formulario/crear', {
            nombre,email,mensaje
          })
        
        alert("Formulario enviado de forma exitosa")
        navigate('/')
        }
        catch(err){
          alert(err.response.data.error)
          return
        }
            
    }
  
    return (

<div className="container py-2">
  <img className="bg-img" src={bgImage} alt="Bg" />
    <form  action="https://formsubmit.co/boza.marion@gmail.com" method="POST" onSubmit={register}>    
      <div className="mb-3">     
        <input className="form-control" id="name" type="text" placeholder= "nombre" name="name"  data-sb-validations="required" required onChange={ev => setNombre(ev.target.value)}  />
        <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
      </div>   
      <div className="mb-3">      
        <input className="form-control" id="emailAddress" type="email" placeholder= "email" name="mail" data-sb-validations="required, email" required onChange={ev => setEmail(ev.target.value)}/>
        <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
      </div>
      <div className="mb-3">      
        <textarea className="form-control" id="message" type="text" placeholder="mensaje" name="mensaje"  data-sb-validations="required" required onChange={ev => setMensaje(ev.target.value)}></textarea>
        <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
      </div>    
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center mb-3">Formulario enviado!</div>
      </div>
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center mb-3">Formulario enviado!</div>
      </div>   
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">Error enviando mensaje!</div>
      </div>
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">Error enviando mensaje!</div>
      </div>   
      <div className="form button-out">
        <button className="contact-button" type="submit">Enviar</button>
      </div>
    </form>
</div>
    );
}



export default Formulario