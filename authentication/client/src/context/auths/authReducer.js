import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_ERRORS
}from '../types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                user: null,
                error: action.payload,
                loading: false
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
            return state
    }
}