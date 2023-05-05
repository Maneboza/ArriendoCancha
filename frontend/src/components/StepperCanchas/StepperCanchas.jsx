// import React, { useState } from "react";

// import { CDBStepper, CDBStep } from "cdbreact";
// // CDBInput, CDBBtn, CDBContainer

// const StepperCanchas = () => {
//     const [active, setActive] = useState(1);

//     const handleNextPrevClick = a => setActive(a);

//     return (
//         <CDBStepper>
//             <CDBStep
//             id={1}
//             name="Basic Information"
//             handleClick={() => handleNextPrevClick(1)}
//             active={active}
//             component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
//             />
//             <CDBStep
//             id={2}
//             name="Personal Data"
//             handleClick={() => handleNextPrevClick(2)}
//             active={active}
//             component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
//             />
//             <CDBStep
//             id={3}
//             name="Personal Data"
//             handleClick={() => handleNextPrevClick(2)}
//             active={active}
//             component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
//             />
//         </CDBStepper>
        
//     );
// };

// const Step1 = ({ handleNextPrevClick }) => {
//     return (
        
//         <div>
//             <h1>Hola</h1>
//             <button onClick={() => handleNextPrevClick(2) }>Next</button>
//         </div>

//         );
//     };

//     const Step2 = ({ handleNextPrevClick }) => {
//         return (
//             <h1>Hola 2</h1>
//             );
//         };



//     export default StepperCanchas;

import "./StepperCanchas.css";
import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBInput, CDBBtn } from "cdbreact";

export const StepperCanchas = () => {

    const [active, setActive] = useState(1)

    const handleNextPrevClick = (a) => {
            setActive(a)
    };
    return (
        <CDBStepper direction="horizontal" showTitle={false} showTooltip={false}>
            <CDBStep
            id={1}
            name="Basic Information"
            handleClick={() => handleNextPrevClick(1)}
            active={active}
            component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
            />
            <CDBStep
            id={2}
            name="Personal Data"
            handleClick={() => handleNextPrevClick(2)}
            active={active}
            component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
            />
            <CDBStep
            id={3}
            name="Terms and Conditions"
            handleClick={() => handleNextPrevClick(3)}
            active={active}
            component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
            />
        </CDBStepper>
    )
    };

    const Step3 = ({ handleNextPrevClick }) => {
    return (
        <StepContainer>
        <div style={{ width: '100%', background: 'transparent', padding: '30px 10px', height: '100%' }}>
            <div
            style={{
                margin: '0 auto',
                maxWidth: '500px',
                borderRadius: '10px',
                background: '#f5f5f5',
                boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
            }}
            >
            <FlexColumnContainer>
                <div
                style={{
                    textAlign: 'center',
                    padding: '20px 0 10px 0',
                    color: '#939393',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
                >
                Step 3
                </div>
                <FlexColumnContainer width="100%">
                <div
                    style={{
                    fontSize: '10px',
                    fontWeight: '200',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    }}
                >
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
                    molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis
                    assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                    </p>
                    <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore
                    recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque
                    quos facere sequi unde optio aliquam!
                    </p>
                    <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore
                    recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque
                    quos facere sequi unde optio aliquam!
                    </p>
                    <p>
                    Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore
                    recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque
                    quos facere sequi unde optio aliquam!
                    </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <CDBBtn
                    className="float-start"
                    circle={false}
                    color="secondary"
                    flat
                    outline
                    onClick={() => handleNextPrevClick(2)}
                    >
                    Previous
                    </CDBBtn>
                    <CDBBtn
                    className="float-end"
                    flat
                    color="secondary"
                    circle={false}
                    onClick={() => handleNextPrevClick(4)}
                    >
                    Next
                    </CDBBtn>
                </div>
                </FlexColumnContainer>
            </FlexColumnContainer>
            </div>
        </div>
        </StepContainer>
    );
    };

    const Step2 = ({ handleNextPrevClick }) => {
    return (
        <StepContainer md="12">
        <div style={{ width: '100%', background: 'transparent', padding: '30px 10px', height: '100%' }}>
            <div
            style={{
                margin: '0 auto',
                maxWidth: '500px',
                borderRadius: '10px',
                background: '#f5f5f5',
                boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
            }}
            >
            <FlexColumnContainer>
                <div
                style={{
                    textAlign: 'center',
                    padding: '20px 0 10px 0',
                    color: '#939393',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
                >
                Step 2
                </div>
                <FlexColumnContainer width="100%">
                <CDBInput color="secondary" label="FirstName" />
                <CDBInput color="secondary" label="LastName" />
                <CDBInput color="secondary" label="Surname" />
                <CDBInput color="secondary" label="Address" />
                <CDBInput color="secondary" label="Country" />
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <CDBBtn
                    color="secondary"
                    flat
                    className="float-start"
                    circle={false}
                    outline
                    onClick={() => handleNextPrevClick(1)}
                    >
                    Previous
                    </CDBBtn>
                    <CDBBtn
                    color="secondary"
                    circle={false}
                    flat
                    className="float-end"
                    onClick={() => handleNextPrevClick(3)}
                    >
                    Next
                    </CDBBtn>
                </div>
                </FlexColumnContainer>
            </FlexColumnContainer>
            </div>
        </div>
        </StepContainer>
    );
    };

    const Step1 = ({ handleNextPrevClick }) => {
    return (
        <StepContainer>
        <div style={{ width: '100%', background: 'transparent', padding: '30px 10px', height: '100%' }}>
            <div
            style={{
                margin: '0 auto',
                maxWidth: '500px',
                borderRadius: '10px',
                background: '#f5f5f5',
                boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
            }}
            >
            <FlexColumnContainer>
                <div
                style={{
                    textAlign: 'center',
                    padding: '20px 0 10px 0',
                    color: '#939393',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
                >
                Step 1
                </div>
                <FlexColumnContainer width="100%">
                    <div className='calentario-canchas'>
                        <h5>Selecciona un día y la hora:</h5>
                        <label for="month">Mes :</label>
                        <select name="month" id="month">
                        <option value="mayo">Mayo</option>
                        <option value="junio">Junio</option>
                        <option value="julio">Julio</option>
                        </select>

                        <div className='hours' >
                            <button type="button" className='hour-button'>8:00</button>
                            <button type="button" className='hour-button'>9:00</button>
                            <button type="button" className='hour-button'>10:10</button>
                            <button type="button" className='hour-button'>11:20</button>
                            <button type="button" className='hour-button'>12:30</button>
                            <button type="button" className='hour-button'>14:00</button>
                            <button type="button" className='hour-button'>15:00</button>
                            <button type="button" className='hour-button'>16:10</button>
                            <button type="button" className='hour-button'>17:20</button>
                            <button type="button" className='hour-button'>18:30</button>
                            <button type="button" className='hour-button'>19:40</button>
                        </div>
                        <button type="submit" className='submit-button'>Agendar</button>
                    </div>

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <CDBBtn
                    color="secondary"
                    flat
                    circle={false}
                    className="float-end"
                    onClick={() => handleNextPrevClick(2)}
                    >
                    Next
                    </CDBBtn>
                </div>
                </FlexColumnContainer>
            </FlexColumnContainer>
            </div>
        </div>
        </StepContainer>
    );
    };

    const FlexColumnContainer = styled('div')`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
    justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
    align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
    box-sizing: border-box;
    `;

    const StepContainer = styled('div')`
    width: 100%;
    height: 100%;

}
    `;