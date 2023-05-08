import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import bgImage from "../../imagenes/fondos/imgFondo9.png";
import swal from "sweetalert";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
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

    const resp = axios.post(window.$api + 'usuarios/login', {
      email, clave

    }).then((response) => {

      if (response.data.status === 'OK') { navigate('/') }

      if (response.data.status === 'NO OK') { swal("Usuario o Password incorrectas") }

    });

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
          <input type="password" className="form-control" id="password" placeholder="CLAVE" value={clave} onChange={(e) => setClave(e.target.value)} />
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