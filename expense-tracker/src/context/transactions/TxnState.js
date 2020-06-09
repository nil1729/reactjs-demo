import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import txnReducer from './txnReducer';
import TxnContext from './txnContext';
import {
    ADD_TRANSACTION,
    UPDATE_EXPENSE,
    GET_DATA
} from '../types';

const TxnState = props => {
    const initialState = {
        transactions: [],
        balance: 0,
        income: 0,
        expense:0
    }
    const [state, dispatch] = useReducer(txnReducer, initialState);

    // Get Data
    const getData = () => dispatch({
        type: GET_DATA,
    });

    // ADD Transaction

    const addTxn = (text, amount) => {
            dispatch({
            type: ADD_TRANSACTION,
            payload:{
                id: uuidv4(),
                text,
                amount
            }
        });
    }

    // Update Expenses
    const updateExpense = (amount) => {
        dispatch({
            type: UPDATE_EXPENSE,
            payload: amount
        });
    };



    return (
        <TxnContext.Provider
            value={{
                transactions: state.transactions,
                balance: state.balance,
                income: state.income,
                expense: state.expense,
                addTxn,
                updateExpense,
                getData
            }}
        >
            {props.children}
        </TxnContext.Provider>
    )
}
export default TxnState;