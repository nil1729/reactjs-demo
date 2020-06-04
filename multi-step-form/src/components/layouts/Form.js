import React, {useState} from 'react'

import UserDetail from '../forms/UserDetail';
import PersonalDetail from '../forms/PersonalDetail';
import Confirm from '../forms/Confirm';
import Success from '../forms/Success';
import {Typography} from '@material-ui/core';


const Form = () => {
    const [input, setInput] = useState({
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    });

    const changeInput = (name, value) =>{
        setInput({
            ...input,
            [name]:value
        });
    }

    const [step, setStep] = useState(1);
    const stepNext = () => {
        setStep(step+1);
    }

    const stepPrev = () => {
        setStep(step-1);
    }

    switch (step) {
        case 1:
            return(
                <UserDetail
                    stepNext={stepNext}
                    input={input}
                    changeInput={changeInput}
                />
            ) 
        case 2:
            return (
                <PersonalDetail
                    stepNext={stepNext}
                    stepPrev={stepPrev}
                    input={input}
                    changeInput={changeInput}
                />
            )
        case 3:
            return (
                <Confirm
                    stepNext={stepNext}
                    stepPrev={stepPrev}
                    input={input}
                />
            )
        case 4:
            return (
                <Success/>
            )   
        default:
            return (
                <Typography variant="h4" gutterBottom>
                    You are in Wrong Page
                </Typography>
            )
    }
}

export default Form
