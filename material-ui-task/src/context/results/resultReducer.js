import {
    SEARCH_PHOTOS,
    CLEAR_SEARCH
} from '../types';
export default (state, action) => {
    switch (action.type) {
        case SEARCH_PHOTOS:
            return {
                ...state,
                images: action.payload
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                images: []
            }
        default:
            return state
    }
}