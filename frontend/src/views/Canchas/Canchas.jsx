// import { useEffect, useState } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from 'axios';

import bgImage from "../../imagenes/fondos/imgFondo2.png";
import { StepperCanchas } from "../../components/StepperCanchas/StepperCanchas";



const Canchas = () => {

    return (
        <div >
            <img className="bg-img" src={bgImage} alt="Bg" />
            <StepperCanchas />
        </div>
            
);
};

export default Canchas;