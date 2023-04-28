import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import ListarEventos from './components/listarEventos/ListarEventos';
import CrearEventos from './components/crearEventos/CrearEventos';
import ActualizarEventos from './components/actualizarEventos/ActualizarEventos';


function App() {
  return (
    <div>
            <h1>ROCK AND ROADIE</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListarEventos/>}/>
          <Route path='/asistir' element={<CrearEventos/>}/>
          <Route path='/asistir/:idEventos' element={<ActualizarEventos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
