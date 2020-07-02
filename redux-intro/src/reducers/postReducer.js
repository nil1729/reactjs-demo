import {
    FETCH_POST,
    ADD_POST,
    SET_LOADING
} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_POST:
            return {
                ...state,
                items: action.payload,
                    loading: false,
            };
        case ADD_POST:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
};