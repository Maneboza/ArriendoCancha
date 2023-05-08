// import { useEffect, useState } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from 'axios';
import "./Home.css";
import bgImage from "../../imagenes/fondos/imgFondo10.png";
import logo4 from "../../imagenes/logos/logo4.png";
import logo5 from "../../imagenes/logos/logo5.png";
import { Link } from 'react-router-dom';
import evento1 from "../../imagenes/eventos/imgEvento1.png";
import evento2 from "../../imagenes/eventos/imgEvento2.png";
import evento3 from "../../imagenes/eventos/imgEvento3.png";

import icon1 from "../../imagenes/logos/twitterIcon2.png";
import icon2 from "../../imagenes/logos/igIcon2.png";
import icon3 from "../../imagenes/logos/fbIcon2.png";

const Home = () => {

    // const [listaEventos, setListaEventos] = useState([{}]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("Inicio el componente");
    //     axios.get("http://localhost:8000/eventos/listar").then(result => {
    //         console.log(result.data);
    //         setListaEventos(result.data);
    //     });
    // }, []);

    // const irAlCrear = () => {
    //     navigate("/asistir/");
    // }

    return (
        <div >
            <img className="bg-img" src={bgImage} alt="Bg" />
    
            <div className="row">
                <div className= "col-7 text-center">
                    <div className="event-text-box">
                        <img className="imgs-reserva" src={logo4} alt="img-reserva" />  
                        <h4 className="tittle-event">EVENTOS</h4>
                        <img className="imgs-reserva" src={logo5} alt="img-reserva" />
                    </div>
                    <div className="event-box">
                        <img className="img-event" src={evento1} alt="img event" />
                        <div className="event-box-text">
                            <h5>Rumbo al Mundial de Tenis en Silla de Ruedas</h5>
                            <p className="mini-text-box" >Unas 20 tenistas participaran en el torneo que se disputara entre el 16 y el 23 de julio. Será el primer torneo en superficie de arcilla de la temporada...</p>
                            <a href="/" className="link-new">¡leer noticia!</a>
                        </div>
                    </div>
                    <div className="event-box">
                        <img className="img-event" src={evento2} alt="img even" />
                        <div className="event-box-text">
                            <h5>El tercer Campeonato Master ya tiene a sus primeros medalleros</h5>
                            <p className="mini-text-box" >Este sábado 8 de abril, el gimnasio CEO 1, ubicado en el Centro de Entrenamiento Olímpico (CEO) de Ñuñoa, recibió a los competidores el tercer...</p>
                            <a href="/" className="link-new">¡leer noticia!</a>
                        </div>
                    </div>
                    <div className="event-box">
                        <img className="img-event" src={evento3} alt="img even" />
                        <div className="event-box-text">
                            <h5>Selectivo Infantil & Juvenil vía 2023</h5>
                            <p className="mini-text-box" >Este pasado fin de semana 24 al 26 de marzo, se realizó el circuito nacional de estudiantes organizado por la federación nacional de tenis...</p>
                            <a href="/" className="link-new">¡leer noticia!</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-5 text-center">
                    <div  className="reserve-boxes">
                            
                            <div className="container">
                            
                                <a href="/canchas" className="btn">
                                    <svg width="190" height="60">
                                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="180" height="40"></rect>
                                    </svg>
                                    <span>CANCHAS</span>
                                </a>
                            </div>
                            <div className="container">
                                <a href="/profesor/listar" className="btn">
                                    <svg width="190" height="60">
                                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="180" height="40"></rect>
                                    </svg>
                                    <span>PROFESORES</span>
                                </a>
                            </div>
                            
                    </div>

                    <div className="contact-box">
                        <Link to='/formulario/crear'>
                            <button className="btn-contact" >CONTACTANOS</button>
                        </Link>
                        <div>
                            <p className="contact-text">HORARIOS. Lunes a Domingo de 08:00 a 20:00 horas ; TELÉFONO. 222072311 ; DIRECCIÓN. Cerro Colorado 4661</p>
                        </div>
                        <img className="red-logo" src={icon1} alt="img red" />
                        <img className="red-logo" src={icon2} alt="img red" />
                        <img className="red-logo" src={icon3} alt="img red" />
                    </div>


                    <div className="btn-plan-box">
                    <button className="btn-plan">Contrata un Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
