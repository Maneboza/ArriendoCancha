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

function App() {
  return (
    <div>
            {/* <h1>ROCK AND ROADIE</h1> */}
      <NavBarMenu/>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
