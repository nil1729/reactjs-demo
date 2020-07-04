import React from 'react'
import Alert from './Alert';

const About = () => {
    return (
        <div className="container mb-0">
            <Alert />
            <div className="jumbotron mt-4 pt-1 pb-3 mb-0">
                <h1 className="display-4">JWT Authentication</h1>
                <p className="lead text-danger">Using Redux Version 2.0.0</p>
            </div>
        </div>
    )
}

export default About
