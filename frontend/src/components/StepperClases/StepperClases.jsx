import "./StepperClases.css";
import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBBtn } from "cdbreact";
import ListarProfesores from "../../views/Profesores/ListarProfesores";
import ProfesoresId from "../../views/Profesores/ProfesoresId"


export const StepperClases= () => {

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
            <CDBStep
            id={4}
            name="Finish"
            handleClick={() => handleNextPrevClick(4)}
            active={active}
            component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
            />
        </CDBStepper>
    )
    };

    const Step4 = ({ handleNextPrevClick }) => {
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
                Step 4
                </div>
                <FlexColumnContainer width="100%">
                <div style={{ fontSize: '25px', textAlign: 'center' }}>
                    Congratulations! You have completed this process.
                    <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                    🎉
                    </span>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <CDBBtn
                    flat
                    outline
                    circle={false}
                    color="secondary"
                    onClick={() => handleNextPrevClick(3)}
                    >
                    Previous
                    </CDBBtn>
                </div>
                </FlexColumnContainer>
            </FlexColumnContainer>
            </div>
        </div>
        </StepContainer>
    );
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
                <ProfesoresId></ProfesoresId>
                <FlexColumnContainer width="100%">
                {/* <CDBInput color="secondary" label="FirstName" />
                <CDBInput color="secondary" label="LastName" />
                <CDBInput color="secondary" label="Surname" />
                <CDBInput color="secondary" label="Address" />
                <CDBInput color="secondary" label="Country" /> */}
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
                maxWidth: '1200px',
                borderRadius: '10px',
                background: 'whitesmoke',
                boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
            }}
            >
            <FlexColumnContainer>
                <div
                style={{
                    textAlign: 'center',
                    padding: '5px 0 10px 0',
                    color: '#939393',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    width: '200px'
                }}
                >
                Step 1
                </div>
                <FlexColumnContainer width="100%">
                  <ListarProfesores></ListarProfesores>
                {/* <CDBInput color="secondary" label="Username" />
                <CDBInput color="secondary" label="Email" />
                <CDBInput color="secondary" label="Password" />
                <CDBInput color="secondary" label="Confirm Password" /> */}
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
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

    
    export default StepperClases;