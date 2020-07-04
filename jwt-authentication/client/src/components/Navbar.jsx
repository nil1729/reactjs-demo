import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const Navbar = ({ auths }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">JWT_AUTH</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    {
                        auths.token && (<li className="nav-item">
                            <NavLink className="nav-link lead" to="/secret">Home</NavLink>
                        </li>)
                    }
                    <li className="nav-item">
                        <NavLink className="nav-link lead" to="/about">About</NavLink>
                    </li>
                    {
                        !auths.token && (<li className="nav-item">
                            <NavLink className="nav-link lead" to="/auth">Autheticate</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps)(Navbar);
