import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout, loadUser } from '../actions/AuthActions';


const Navbar = ({ auths, logout, loadUser }) => {
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">JWT Noob</span>
            <button onClick={() => { setOpen(!open); }} className="navbar-toggler" type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div style={{ display: open ? 'block' : '' }} className="collapse navbar-collapse">
                <ul onClick={() => { setOpen(!open); }} className="navbar-nav ml-auto d-flex align-items-center">
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
                    {
                        auths.token && (<li className="nav-item">
                            <span style={{ cursor: 'pointer' }} onClick={() => { logout() }} className="nav-link lead text-light">Logout</span>
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

export default connect(mapStateToProps, { logout, loadUser })(Navbar);
