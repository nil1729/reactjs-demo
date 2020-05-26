import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const Navbar = ({title, icon}) =>{
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 d-flex align-items-center">
                <i className={`fa-2x ${icon} mr-1`}></i>
                    {`${title}`}
                </span>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar
