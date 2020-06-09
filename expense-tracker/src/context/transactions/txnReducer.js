import {
    ADD_TRANSACTION,
    UPDATE_EXPENSE,
    GET_DATA
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_DATA:
            try {
                const data0 = JSON.parse(localStorage.getItem('ExpenseTracker'));
                return {
                    ...state,
                    transactions: data0.transactions,
                    balance: data0.balance,
                    expense: data0.expense,
                    income: data0.income
                };
            } catch (e) {
                return {
                    ...state
                }
            } 
        case ADD_TRANSACTION:
            const data1 = {
                ...state,
                transactions: [ action.payload, ...state.transactions]
            }
            localStorage.setItem('ExpenseTracker', JSON.stringify(data1));
            return data1;
        case UPDATE_EXPENSE:
            const data2 = {
                ...state,
                income: (action.payload>0?state.income+=action.payload:state.income),
                expense: (action.payload<0?state.expense-=action.payload:state.expense),
                balance: (state.balance += action.payload)
            }
            localStorage.setItem('ExpenseTracker', JSON.stringify(data2));
            return data2;
        default:
            return state
    }
}