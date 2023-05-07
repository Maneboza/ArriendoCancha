import "./Calendario.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";


export const Horas = () => {

    const [Horas, sethoras] = useState([{}]);


    useEffect(() => {
        console.log(" ");
        axios.get("http://localhost:8000/cancha/disponibilidadtotal/").then(result => {
            console.log(result.data);
            sethoras(result.data);
        });
    }, []);

    return (

        <div>

            <div className='calentario-canchas'>
                <h5>Horas disponibles para: {moment().add(1, 'day').format('DD-MM-YYYY')}</h5>
                <div className="row">
                    <div className="col">
                        {Horas.map((item, index) =>
                            <div key={index} className="horarios">
                                <div class="container text-center">
                                    <div class="row row-cols-auto">

                                        <div class="list-group">
                                            <input type="radio" name="RadioInputName" value="Value1" id="Radio1" />
                                            <label class="list-group-item" for="Radio1">{moment(item.start).utc().format('HH:mm')}</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <button type="submit" className=''>Agendar</button>
            </div>
        </div>

    );
};

export default Horas;
