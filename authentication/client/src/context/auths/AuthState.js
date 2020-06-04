import React, {useReducer} from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import AuthContext from './authContext';
import authReducer from './authReducer';
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

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null,
        loading: true
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    // load user
    const loadUser = async () => {
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auths');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (e) {
            dispatch({
                type: AUTH_ERROR,
                payload: e.response.data.msg
            })       
        }
    };

    // REGISTER A USER
    const register = async user => {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/users', user, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }catch(e){
            dispatch({
                type: REGISTER_FAIL,
                payload: e.response.data.msg
            })
        }
    }
    
    
    //Login A User
    const login = async user => {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/auths', user, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }catch(e){
            dispatch({
                type: LOGIN_FAIL,
                payload: e.response.data.msg
            })
        }
    } 

    // Logout
    const logout = () => dispatch({
        type: LOGOUT,
        payload: 'Suucessfully Logged Out'
    });

    // Clear Errors
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS,
    });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                loading: state.loading,
                register,
                loadUser,
                login,
                clearErrors,
                logout            
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

};
export default AuthState;