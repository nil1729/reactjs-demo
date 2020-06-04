import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {v4 as uuidv4} from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'


const AlertState = props => {
    const initialState = [];
    const [state, dispatch] = useReducer(alertReducer, initialState);


    // Set Alert
    const setAlert = (msg, type) => {
        const alert = {
            id: uuidv4(),
            msg,
            type
        };
        dispatch({
            type:SET_ALERT,
            payload: alert
        });
        setTimeout(()=>{
            removeAlert(alert.id);
        }, 4000);
    };
    // Remove Alert

    const removeAlert = id => dispatch({
        type: REMOVE_ALERT,
        payload: id
    });

    return(
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}
        >    
            {props.children}
        </AlertContext.Provider>
    )
};

export default AlertState;