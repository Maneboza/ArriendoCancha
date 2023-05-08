import "./Calendario.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import moment from "moment";
import bgImage from "../../imagenes/fondos/imgFondo2.png";
import logo4 from "../../imagenes/logos/logo4.png";
import swal from "sweetalert"

export const Horas = () => {

    const [Horas, sethoras] = useState([{}]);
    const [idDisponibilidad, setIdDispo] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [codigoTransaccion, setIdTransa] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        console.log(" ");
        axios.get(window.$api + "cancha/disponibilidadtotal/").then(result => {
            console.log(result.data);
            sethoras(result.data);
        });
    }, []);

    async function reserva(ev) {
        ev.preventDefault()

        if (!idDisponibilidad) {
            swal("Debe seleccionar una hora !!")
        }
        else {
            try {
                
                
                swal({
                    title: "Estás seguro?",
                    text: "El horario y cancha se reservará si continuas",
                    icon: "warning",
                    buttons: true
                 
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            axios.post('http://localhost:8000/cancha/reservar', {
                                idUsuario, idDisponibilidad, codigoTransaccion
                            })
                            swal("Horario y Cancha reservada !", {
                                icon: "success"
                            });
                            navigate('/')
                        }
                    });
            }
            catch (err) {
                alert(err.response.data.error)
                return
            }
        }

    }

    return (
        <form onSubmit={reserva}>
            <div>
                <img className="bg-img" src={bgImage} alt="Bg" />
                <div className='calendario-canchas'>
                    <div className="row">
                        <div className="horario-text-box">
                            <img className="imgs-horario" src={logo4} alt="img-reserva" />
                            <h5 className="titulo">Horas disponibles para: {moment().add(1, 'day').format('DD-MM-YYYY')}</h5>
                        </div>
                        <div className="col">
                            {Horas.map(item => (
                                <div key={item._id} >
                                    <input type="radio" name="opcion" value={item._id} onChange={ev =>setIdDispo(ev.target.value)} />
                                    <label>{moment(item.start).utc().format('HH:mm')}</label><br/>
                                </div>                                
                            )         
                            )}
                        </div>
                        <div className="mb-3">
                            <input className="form-control" id="Input1" data-sb-validations="required" placeholder="Numero transacción" required onChange={ev => setIdTransa(ev.target.value)} />
                            <input className="form-control" id="Input2" type="email" placeholder="Correo Electrónico" required onChange={ev => setIdUsuario(ev.target.value)} />
                            <div className='register-button-out'>
                                <button className="reserve-button" type="submit">Reservar </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </form>

    );
};

export default Horas;