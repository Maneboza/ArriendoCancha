import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import ListarProfesores from './components/ListarProfesores/ListarProfesores';
import DetalleProfesores from './components/ProfesoresId.js/ProfesoresId';
// import {NavBarMenu} from './components/NavBarMenu/NavBarMenu';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
// import 'bcootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
            {/* <h1>ROCK AND ROADIE</h1> */}
      {/* <NavBarMenu/>       */}
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/profesor/listar' element={<ListarProfesores/>}/>
          <Route path='/profesor/:id' element={<DetalleProfesores/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
