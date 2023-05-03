import "./Stepper.css";
import React, { useState } from "react";

import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";


const Stepper = () => {
    const [active, setActive] = useState(1);

    const handleNextPrevClick = a => setActive(a);

    return (
        <CDBStepper>
            <CDBStep
            id={1}
            icon="pencil-alt"
            name="Basic Information"
            handleClick={() => handleNextPrevClick(1)}
            active={active}
            component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
            />
            <CDBStep
            id={2}
            icon="info-circle"
            name="Personal Data"
            handleClick={() => handleNextPrevClick(2)}
            active={active}
            component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
            />
        </CDBStepper>
        
    );
};

const Step1 = ({ handleNextPrevClick }) => {
    return (
        
        <div>
            <h1>Hola</h1>
            <button onClick={() => handleNextPrevClick(2) }>Next</button>
        </div>

        );
    };

    const Step2 = ({ handleNextPrevClick }) => {
        return (
            <h1>Hola 2</h1>
            );
        };



    export default Stepper;



