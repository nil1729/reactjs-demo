import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT,
    LOAD_USER,
    SET_ALERT,
    REMOVE_ALERT
} from '../actions/types';

const initialState = {
    token: null,
    user: null,
    errors: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                token: action.payload.token,
                    user: action.payload.user
            };
        case REGISTER_USER:
            localStorage.setItem('AuthData', JSON.stringify(action.payload));
            return {
                ...state,
                token: action.payload.token,
                    user: action.payload.user
            };
        case LOGIN_USER:
            localStorage.setItem('AuthData', JSON.stringify(action.payload));
            return {
                ...state,
                token: action.payload.token,
                    user: action.payload.user
            };
        case LOGOUT:
            localStorage.removeItem('AuthData');
            return {
                ...state,
                token: null,
                    user: null,
                    errors: [{
                        message: 'Successfully logged out'
                    }]
            };
        case SET_ALERT:
            return {
                ...state,
                errors: action.payload
            };
        case REMOVE_ALERT:
            return {
                ...state,
                errors: null
            };
        default:
            return state;
    }
};