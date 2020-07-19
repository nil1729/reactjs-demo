import React, { useContext } from 'react'
import AppContext from '../../context/appContext'

const Home = () => {
    const appContext = useContext(AppContext);
    const { user } = appContext;
    return (
        <div className="container center">
            <h5 className="center indigo-text">{user && user.email}</h5>
        </div>
    )
}

export default Home
