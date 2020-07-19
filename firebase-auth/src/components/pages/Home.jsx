import React, { useContext } from 'react'
import logo from './logo.png'
import AppContext from '../../context/appContext'

const Home = () => {
    const appContext = useContext(AppContext);
    const { signOut } = appContext;
    return (
        <div className="container center">
            <h5 className="center indigo-text">Nilanjan Deb</h5>
            <br />
            <div className="container center">
                <img src={logo} className="responsive-img" alt="firebase" />
            </div>
            <button onClick={() => { signOut() }} className="waves-effect waves-light btn">Sign Out</button>
        </div>
    )
}

export default Home
