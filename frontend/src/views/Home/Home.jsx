// import { useEffect, useState } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from 'axios';
import "./Home.css";
import bgImage from "../../imagenes/fondos/imgFondo10.png";

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

            <div className= "col-6">
                <div className="event-text-box">
                    {/* <img className="logo-event" src={logo3} alt="logo event" /> */}
                    <h3 className="tittle-event">Eventos</h3>
                </div>
                <div className="event-box">
                    <img className="img-event" src={evento1} alt="img event" />
                    <div className="event-box-text">
                        <h6>Rumbo al Mundial de Tenis en Silla de Ruedas</h6>
                        <p>Unas 20 tenistas participaran en el torneo que se disputara entre el 16 y el 23 de julio. Será el primer torneo en superficie de arcilla de la temporada.</p>
                    </div>
                </div>
                <div className="event-box"> 
                    <img className="img-event" src={evento2} alt="img even" />
                    <div className="event-box-text">
                        <h6>El tercer Campeonato Master ya tiene a sus primeros medalleros</h6>
                        <p>Este sábado 8 de abril, el gimnasio CEO 1, ubicado en el Centro de Entrenamiento Olímpico (CEO) de Ñuñoa, recibió a los competidores el tercer...</p>
                    </div>
                </div>
                <div className="event-box">
                    <img className="img-event" src={evento3} alt="img even" />
                    <div className="event-box-text">
                        <h6>Selectivo Infantil & Juvenil vía 2023</h6>
                        <p>Este pasado fin de semana 24 al 26 de marzo, se realizó el circuito nacional de estudiantes organizado por la federación nacional de tenis.</p>
                    </div>
                </div>
                <div className="btn-box">
                    <button className="btn-plan">Contrata un Plan</button>
                </div>
            </div>
            
            <div className="col-5">
                <div className="reserve-boxes">
                    <h4>Reserva</h4>
                    <div>
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
                                <span>CLASES</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-box">
                    <h6 className="contact-tittle">Ponte en contacto</h6>
                    <div>
                    <p className="contact-text">HORARIOS. Lunes a Domingo de 08:00 a 20:00 horas ; TELÉFONO. 222072311 ; DIRECCIÓN. Cerro Colorado 4661</p>
                    </div>
                    <img className="red-logo" src={icon1} alt="img red" />
                    <img className="red-logo" src={icon2} alt="img red" />
                    <img className="red-logo" src={icon3} alt="img red" />
                </div>


            </div>
        </div>
        </div>
    );
}

export default Home;
