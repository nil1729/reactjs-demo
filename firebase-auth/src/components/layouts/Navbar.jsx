import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';
import AppContext from '../../context/appContext'
const Navbar = () => {
    const appContext = useContext(AppContext);
    const { isAuthenticated, loading, signOut } = appContext
    return (
        <nav className="light-blue">
            <div className="nav-wrapper">
                <Link to="/" style={{ height: 'inherit', display: 'flex' }} className="brand-logo">
                    <img style={{ height: '100%', width: '35%', margin: 'auto' }} src={logo} alt="firebase" className="responsive-img" />
                </Link>
                {
                    !isAuthenticated && !loading ? (<></>) : (
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><button onClick={() => { signOut() }} className="btn-flat white-text">SIGN OUT</button></li>
                        </ul>)
                }
            </div>
        </nav>
    )
}

export default Navbar
