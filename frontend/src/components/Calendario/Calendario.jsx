import "./Calendario.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import moment from "moment";
import bgImage from "../../imagenes/fondos/imgFondo2.png";


export const Horas = () => {

    const [Horas, sethoras] = useState([{}]);
    const [idDisponibilidad, setIdDispo] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [codigoTransaccion, setIdTransa] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        console.log(" ");
        axios.get("http://localhost:8000/cancha/disponibilidadtotal/").then(result => {
            console.log(result.data);
            sethoras(result.data);
        });
    }, []);

    async function reserva(ev) {
        ev.preventDefault()

        if (!idDisponibilidad) {
            alert("Debe seleccionar una hora !!")
        }
        else {
            try {
                await axios.post('http://localhost:8000/cancha/reservar', {
                    idUsuario, idDisponibilidad, codigoTransaccion
                })
                alert("Cancha reservada exitosamente")
                navigate('/')
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
                    <h5>Horas disponibles para: {moment().add(1, 'day').format('DD-MM-YYYY')}</h5>
                        <div className="col">
                            {Horas.map(item => (
                            <div key={item._id} >
                                    <input type="radio" name="opcion" value={item._id} onChange={ev => setIdDispo(ev.target.value)} />
                                    <label>{moment(item.start).utc().format('HH:mm')}</label><br />
                                </div>
                            ))}
                        </div>

                        <div className="mb-3">
                        <input className="form-control" id="Input1" placeholder="Numero transacción" required onChange={ev => setIdTransa(ev.target.value)} />
                        <input className="form-control" id="Input2" placeholder="Correo Electrónico" required onChange={ev => setIdUsuario(ev.target.value)} />
                        <div className='register-button-out'>
                    <button className="submit-button" type="submit">Reservar </button>
                </div>
                    </div>
                </div>
                
                    </div>
                </div>
               
        </form>

    );
};

export default Horas;