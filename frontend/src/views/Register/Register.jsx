import './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import bgImage from "../../imagenes/fondos/imgFondo8.png";
import swal from 'sweetalert';

const Register = () => {

    const navigate = useNavigate() 

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [rut, setRut] = useState('')
    const [clave, setClave] = useState('')    
    const [claveConfirm, setClaveConfirm] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setClave(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        // para verificar que el correo electrónico sea válido
        if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            swal('Por favor, ingrese un correo electrónico válido.')
            return
        }

        // para verificar que la contraseña tenga al menos 8 caracteres
        if (!clave || clave.length < 8) {
            swal('Por favor, ingrese una contraseña de al menos 8 caracteres.')
            return
        }
        if (clave !== claveConfirm) {
            swal('Contraseñas no coinciden.')
            return
        }
        try {       
            const resp = await axios.post(window.$api + 'usuarios/crear', {
                nombre,
                apellido,
                email,
                telefono,
                rut,
                clave,
                claveConfirm
            })

            swal({
                title: "Usuario creado exitosamente",
                icon: "success",
                button: "OK"
            })

            navigate('/')
        }
        catch(err){
            swal(err.response.data.error)
            return
        }
    }

    return (
        <div className="container py-4">
            <img className="bg-img" src={bgImage} alt="Bg" />
                <form className='register-input' onSubmit={handleSubmit}>                       
                    <div className="mb-3">                        
                        <input className="form-control" id="exampleFormControlInput1" required placeholder="NOMBRE"  onChange={ev => setNombre(ev.target.value)}/>
                    </div>        
                    <div className="mb-3">                       
                        <input className="form-control" id="exampleFormControlInput2" placeholder="APELLIDO" required onChange={ev => setApellido(ev.target.value)}/>
                    </div>
                    <div className="mb-3">                        
                        <input className="form-control" id="exampleFormControlInput3" placeholder="CORREO" required value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" id="exampleFormControlInput4" placeholder="TELEFONO" required onChange={ev => setTelefono(ev.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" id="exampleFormControlInput5" placeholder="RUT" required onChange={ev => setRut(ev.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput6" placeholder="CLAVE" required="Clave debe tener al menos 8 dígitos" value={clave} onChange={handlePasswordChange}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput7" placeholder="REPITE LA CLAVE" required onChange={ev => setClaveConfirm(ev.target.value)}/>
                    </div>
                    <div className='register-button-out'>
                        <button type="submit" className='register-button'>REGISTRAR</button>
                    </div>
                </form>
            </div>
    );
}

export default Register;