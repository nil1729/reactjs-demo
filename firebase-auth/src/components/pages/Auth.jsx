import React, { useState, useRef, useEffect, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.js';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/appContext';

const Auth = () => {
    const appContext = useContext(AppContext);
    const { isAuthenticated, register, signIn, authError, clearError } = appContext;
    const [mode, setMode] = useState('login');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const emailEl = useRef();
    const passwordEl = useRef();
    const resetForm = () => {
        emailEl.current.value = '';
        passwordEl.current.value = '';
        M.AutoInit();
    }
    useEffect(() => {
        if (authError) {
            setLoading(false);
            M.toast({ html: authError });
            resetForm();
            clearError();
        }
        else if (isAuthenticated) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [isAuthenticated, authError]);


    const validateInput = (email, password, name) => {
        const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegx.test(email)) {
            M.toast({ html: 'Please enter a valid Email Address' });
        }
        else if (password.trim().length === 0) {
            M.toast({ html: 'Password cannot contain only Spaces' });
        }
        else return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = emailEl.current.value;
        const password = passwordEl.current.value;

        if (!validateInput(email, password)) {
            setLoading(false);
            return;
        }
        if (mode === 'login') {
            await signIn(email, password);
        } else {
            await register(email, password)
        }
        // resetForm();
    }
    return (
        <div className="container z-depth-1" style={{ padding: '10px 1em 0 1em', marginTop: '3em' }} >
            <div className="row">
                <h4 className="center red-text" style={{ textTransform: 'capitalize' }}>{mode}</h4>
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input ref={emailEl} type="email" className="validate" />
                            <label htmlFor="icon_prefix">Email Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">security</i>
                            <input minLength="4" ref={passwordEl} type="password" className="validate" />
                            <label htmlFor="icon_prefix">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn green waves-effect waves-light" type="submit">{loading ? 'Loading ...' : mode === 'login' ? 'login' : 'register'}
                                <i className="material-icons right">send</i>
                            </button>
                            <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login') }} type="button" className="btn teal" style={{ marginLeft: '10px' }}>Switch to {mode === 'login' ? 'register' : 'login'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth;