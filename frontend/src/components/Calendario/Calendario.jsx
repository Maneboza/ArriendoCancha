import "./Calendario.css";
import axios  from "axios";
import React, { useState,  useEffect } from "react";

    export const Horas = () => {

    const [Horas, sethoras] = useState([{}]);
    

            useEffect(() => {
                console.log(" ");
                axios.get("http://localhost:8000/cancha/:id/disponibilidad/").then(result => {
                    console.log(result.data);
                    sethoras(result.data);
                });
                }, []); 

    return (
        <div>
                <div className='calentario-canchas'>
                        <h5>Selecciona un día y la hora:</h5>
                        <label for="month">Mes :</label>
                        <select name="month" id="month">
                        <option value="mayo">Mayo</option>
                        <option value="junio">Junio</option>
                        <option value="julio">Julio</option>
                        </select>
                    <div className="row">       
                        <div className="col">          
                            {Horas.map((item, index) =>                   
                                <div key={index} className="horarios">      
                                    <div class="container text-center">
                                        <div class="row row-cols-auto">
                                            <li key={item._id}>{index.idCancha} - {item.start}-{item.end}</li>
                                            
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