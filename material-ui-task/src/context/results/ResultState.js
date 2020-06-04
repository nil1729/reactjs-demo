import React , {useReducer} from 'react';
import axios from 'axios';
import ResultContext from './resultContext';
import resultReducer from './resultReducer';
import {
    SEARCH_PHOTOS,
    CLEAR_SEARCH
} from '../types';


const ResultState = props => {
    const initialState = {
        images:[],
    }

    const [state, dispatch] = useReducer(resultReducer, initialState);

    const searchPhotos = async (q, count) => {
        const res = await axios.get(`https://pixabay.com/api/?key=15091150-4ccb42b4d59b1aae0fb2486b2&q=${q}&per_page=${count}`);
        dispatch({
            type: SEARCH_PHOTOS,
            payload:res.data.hits
        });
    }

    const clearSearch = () => dispatch({
        type: CLEAR_SEARCH
    })

    return (<ResultContext.Provider
        value={{
            images: state.images,
            searchPhotos,
            clearSearch
        }}
    >
        {props.children}
    </ResultContext.Provider>
    )
}

export default ResultState;

