import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import ListarProfesores from './views/Profesores/ListarProfesores';
import DetalleProfesores from './views/Profesores/ProfesoresId';
import {NavBarMenu} from './components/NavBarMenu/NavBarMenu';
import Home from './views/Home/Home';
// import Login from './views/Login/Login';
import Register from './views/Register/Register';
// import 'bcootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Clases from './views/Clases/Clases';
import Canchas from './views/Canchas/Canchas'
import CalendarioClases from './components/CalendarioClases/CalendarioClases';
import StepperClases from './components/StepperClases/StepperClases';
import LoginForm from './views/Login/Login';
import Formulario from './views/FormularioContacto/FormularioContacto';

function App() {
  return (
    <div>       
    <BrowserRouter>
      <NavBarMenu/>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/profesor/listar' element={<ListarProfesores/>}/>
          <Route path='/profesor/:id' element={<DetalleProfesores/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/canchas' element={<Canchas/>}/>
          <Route path='/canchas1' element={<CalendarioClases/>}/> 
          <Route path='/profesor/:id/reserva-clase/crear' element={<Clases/>}/>
          <Route path='/stepper' element={<StepperClases/>}/>
          <Route path='/formulario/crear' element={<Formulario/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
