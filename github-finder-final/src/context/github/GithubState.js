import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state , dispatch] = useReducer(GithubReducer, initialState);


    // SEARCH USER
    const searchUser = async (title)=>{
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${title}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    // GET USER
    const getSingleUser = async (login)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${login}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    };

    // GET REPOS
    const getUserRepos = async (user)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${user}/repos?per_page=5&sort=created&direction=desc`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    // CLEAR USERS
    const clear = ()=> dispatch({type: CLEAR_USERS});

    // SET LOADING
    const setLoading = () => dispatch({
        type: SET_LOADING
    });


    return <GithubContext.Provider
        value={{
            user: state.user,
            users: state.users,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clear,
            getSingleUser,
            getUserRepos 
        }}
    >
        {props.children}
    </GithubContext.Provider>
};


export default GithubState;