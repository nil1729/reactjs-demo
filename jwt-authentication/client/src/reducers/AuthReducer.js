import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: null,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                token: action.payload.token,
                    user: action.payload.user
            };
        case LOGIN_USER:
            return {
                ...state,
                token: action.payload.token,
                    user: action.payload.user
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                    user: null
            };
        default:
            return state;
    }
};