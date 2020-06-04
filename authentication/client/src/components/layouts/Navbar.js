import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Context
import AuthContext from '../../context/auths/authContext';
const Navbar = ({title}) => {

    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout} = authContext;

    const authLinks = (
        <>
        <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
            <span className="btn btn-sm btn-warning" onClick={()=>logout()}>Logout</span>
        </li>
        </>
    );
    const guestLinks = (
        <>
        <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
        </>
    )

  return (
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
            {title}
        </span>
        <ul className="nav">
            {
                isAuthenticated?authLinks:guestLinks
            }
        </ul>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Secret Page'
}
export default Navbar
