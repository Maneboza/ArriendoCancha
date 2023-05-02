import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
// import ListarEventos from './components/listarEventos/ListarEventos';
// import CrearEventos from './components/crearEventos/CrearEventos';
// import ActualizarEventos from './components/actualizarEventos/ActualizarEventos';


// import 'bcootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'

import {NavBarMenu} from './components/NavBarMenu/NavBarMenu'

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Clases from './views/Clases/Clases';
import Canchas from './views/Canchas/Canchas'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBarMenu/>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/canchas' element={<Canchas/>}/>
          <Route path='/clases' element={<Clases/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
