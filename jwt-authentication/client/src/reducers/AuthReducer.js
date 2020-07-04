import {
    REGISTER_USER,
    LOGIN_USER
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
        default:
            return state;
    }
};