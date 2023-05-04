import './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

import "./Register.css";
import bgImage from "../../imagenes/fondos/imgFondo8.png";

const Register = () => {

    const navigate = useNavigate() 



    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [rut, setRut] = useState('')
    const [clave, setClave] = useState('')    
    const [claveConfirm, setClaveConfirm] = useState('')

    async function register (ev) {
        ev.preventDefault()
        try {
          //const resp = await axios.post('http://localhost:8000/api/auth/register', {
          
        //   const resp = await axios.post(window.$api + 'usuarios/crear', {
        console.log("register jsx")        
        const resp = await axios.post('http://localhost:8000/usuarios/crear', {
            nombre,apellido,email,telefono,rut,clave,claveConfirm
          })
          //const resp2 = await axios.post('http://localhost:8000/api/auth/login', {
          
          //   const resp2 = await axios.post('http://localhost:8000/users/login', {  
          //     email, clave
          //   })
         
          //   localStorage.setItem('token', resp2.data.token)
          navigate('/')
        }
        catch(err){
          alert(err.response.data.error)
          return
        }
    
        
    }

    return (
        <div >
            <img className="bg-img" src={bgImage} alt="Bg" />
            <form className='register-input' onSubmit={register}>
                    
                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlInput1">Nombre</label> */}
                        <input className="form-control" id="exampleFormControlInput1" placeholder="NOMBRE" required onChange={ev => setNombre(ev.target.value)}/>
                    </div>
        
                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlInput1">Apellido</label> */}
                        <input className="form-control" id="exampleFormControlInput2" placeholder="APELLIDO" required onChange={ev => setApellido(ev.target.value)}/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlInput1">Email</label> */}
                        <input className="form-control" id="exampleFormControlInput3" placeholder="CORREO" required onChange={ev => setEmail(ev.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" id="exampleFormControlInput4" placeholder="TELEFONO" required onChange={ev => setTelefono(ev.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" id="exampleFormControlInput5" placeholder="RUT" required onChange={ev => setRut(ev.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleFormControlInput5" placeholder="CLAVE" required onChange={ev => setClave(ev.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleFormControlInput5" placeholder="REPITE LA CLAVE" required onChange={ev => setClaveConfirm(ev.target.value)}/>
                    </div>

                    <div className='register-button-out'>
                        <button type="submit" className='register-button'>REGISTRAR</button>
                    </div>
            </form>
        </div>
    );
}

export default Register;