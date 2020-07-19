import React, { useReducer } from 'react';
import appReducer from './appReducer';
import appContext from './appContext';
import {
    LOAD_USER,
    SIGN_OUT,
    REGISTER,
    SIGN_IN,
    AUTH_ERROR,
    CLEAR_ERROR
} from './types';
import app from '../firebase/firebaseApp';

const AppState = props => {
    const initialState = {
        isAuthenticated: null,
        loading: true,
        authError: null
    }
    const [state, dispatch] = useReducer(appReducer, initialState);

    const loadUser = () => {
        app.auth().onAuthStateChanged(function (user) {
            if (user) {
                dispatch({
                    type: LOAD_USER,
                });
            }
        });
    }
    const signOut = () => {
        app.auth().signOut().then(function () {
            dispatch({
                type: SIGN_OUT
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
    const signIn = async (email, password) => {
        try {
            const res = await app.auth().signInWithEmailAndPassword(email, password);
            console.log(res);
            loadUser();
        } catch (e) {
            const msg = e.code.split('/')[1];
            dispatch({
                type: AUTH_ERROR,
                payload: msg
            });
        }
    }
    const register = async (email, password) => {
        try {
            const res = await app.auth().createUserWithEmailAndPassword(email, password);
            console.log(res);
            loadUser();
        } catch (e) {
            const msg = e.code.split('/')[1];
            dispatch({
                type: AUTH_ERROR,
                payload: msg
            });
        }
    }
    const clearError = () => {
        dispatch({
            type: CLEAR_ERROR
        })
    }
    return (
        <appContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                authError: state.authError,
                loadUser,
                signOut,
                signIn,
                register,
                clearError
            }}
        >
            {props.children}
        </appContext.Provider>
    )
}

export default AppState;