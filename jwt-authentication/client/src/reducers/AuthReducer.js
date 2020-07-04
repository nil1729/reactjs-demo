import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT,
    LOAD_USER
} from '../actions/types';

const initialState = {
    token: null,
    user: null
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
                    user: null
            };
        default:
            return state;
    }
};