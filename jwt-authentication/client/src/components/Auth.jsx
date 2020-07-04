import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../actions/AuthActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Auth = ({ registerUser, loginUser, auths }) => {
    const history = useHistory();
    const [authLogin, setAuthLogin] = useState(true);
    const nameEl = useRef();
    const emailEl = useRef();
    const passwordEl = useRef();
    useEffect(() => {
        if (auths.token) {
            history.push('/secret');
        }
    }, [auths]);
    const resetForm = () => {
        if (!authLogin) {
            nameEl.current.value = '';
        }
        emailEl.current.value = '';
        passwordEl.current.value = '';
    };
    const onSubmit = async e => {
        e.preventDefault();
        const name = authLogin ? '' : nameEl.current.value;
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        if (!authLogin && name.trim().length === 0) {
            return;
        }
        const user = {
            name,
            email,
            password
        }
        if (authLogin) {
            await loginUser(user);
        } else {
            await registerUser(user);
        }
        resetForm();
    };
    return (
        <div className="container">
            <div className="form jumbotron mx-auto mt-4" style={{ width: '50%' }}>
                <form onSubmit={onSubmit}>
                    <h2 className="text-center">{authLogin ? 'Login' : 'Register'} User</h2>
                    {
                        authLogin ? (<></>) : (
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Name"
                                    ref={nameEl}
                                />
                            </div>
                        )
                    }
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            required
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            ref={emailEl}
                        />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            ref={passwordEl}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">{authLogin ? 'Login' : 'Register'}</button>
                    <button onClick={() => { setAuthLogin(!authLogin) }} className="btn btn-warning ml-2" type="button">Switch to {authLogin ? 'Register' : 'Login'}</button>
                </form>
            </div>

        </div>
    )
}

Auth.propTypes = {
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps, { registerUser, loginUser })(Auth);
