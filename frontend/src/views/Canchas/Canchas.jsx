// import { useEffect, useState } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from 'axios';
import "./Canchas.css";
import bgImage from "../../imagenes/fondos/imgFondo2.png";
import  Stepper from '../../components/Stepper/Stepper';




const Canchas = () => {

    return (
        <div >
            <img className="bg-img" src={bgImage} alt="Bg" />
            <Stepper />
        </div>

            
);
};

export default Canchas;