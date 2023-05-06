import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import bgImage from "../../imagenes/fondos/imgFondo9.png";

// const Login = () => {

//     const navigate = useNavigate() 
    
//     const [email, setEmail] = useState('')
//     const [clave, setClave] = useState('')

//         async function login (ev) {
//             ev.preventDefault()
//             try {
//             console.log("login jsx")
//             //   const resp = await axios.post(window.$api + '/auth/login', {
//             //const resp = await axios.post('http://localhost:8000/api/auth/login', {  
//             const resp = await axios.post(window.$api + 'usuarios/login', {    
//                 email, clave
//             })
//             // si el login fué exitoso, guardamos la credencial en localStorage
//             //   localStorage.setItem('token', resp.data.token)
//             // y redirigimos a la pantalla principal
//             navigate('/')
//             }
//             catch(err){
//                 console.log("catch")
//             alert(err.response.data.error)
//             return
//             }   
//     }

//     return (
//         <div >
//             <img className="bg-img" src={bgImage} alt="Bg" />

//             <form className='login-input' onSubmit={login}>

//                 <div className="form-group">

//                     <input required type="email" placeholder="EMAIL" className="form-control" id="email" onChange={ev => setEmail(ev.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     <input required type="password" placeholder="CLAVE" className="form-control" id="password" onChange={ev => setClave(ev.target.value)}/>
//                 </div>  

//                 <div className='login-button-out'>
//                     <button type="submit" className='login-button'>Ingresar</button>
//                 </div>
//             </form>            

//         </div>
//     );
// }

// export default Login;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate() ;

    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!email) {
        setError('El email es requerido');
        return;
      }
  
      if (!clave) {
        setError('Password es requerido');
        return;
      }
  
      const resp =  axios.post(window.$api + 'usuarios/login',       {    
            email, clave
     })
         navigate('/')

    
      setEmail('');
      setClave('');
      setError('');
    };
  
    return (
      <div className="container py-4">
      <form className="login-form" onSubmit={handleSubmit}>
        <img className="bg-img" src={bgImage} alt="Bg" />       
        <div className="mb-3">
        <input className="form-control" id="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>     
        <div className="mb-3">
        <input className="form-control" id="password" placeholder="CLAVE" value={clave} onChange={(e) => setClave(e.target.value)} />
        </div>
          {error && <div>{error}</div>}
        <div className='register-button-out'>
        <button className="submit-button" type="submit">Iniciar Sesión</button>
        </div>
      </form>
      </div>
    );
  };
  
  export default LoginForm;