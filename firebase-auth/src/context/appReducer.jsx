import {
    LOAD_USER,
    SIGN_OUT,
    AUTH_ERROR,
    CLEAR_ERROR
} from './types';
export default (state, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                authError: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
}