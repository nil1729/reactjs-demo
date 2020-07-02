import {
    FETCH_POST,
    ADD_POST,
    SET_LOADING
} from './types';

import axios from 'axios';
const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchPosts = () => async dispatch => {
    try {
        const res = await axios.get('/posts', config);
        dispatch({
            type: FETCH_POST,
            payload: res.data,
        });
    } catch (e) {
        console.log(e);
    }
};


export const addPost = (post) => async dispatch => {
    try {
        const res = await axios.post('/posts', post, config);
        dispatch({
            type: ADD_POST,
            payload: res.data
        });
    } catch (e) {
        console.log(e);
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};