import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <div className="jumbotron">
                <h1 className="display-4">Github Profile Finder</h1>
                <p className="lead">This is a simple App built using ReactJS and axios for fetching data from APIs</p>
                <hr className="my-4"/>
                <h5>Go to Home Route to see how this works. Source Code is available on Github</h5>
                <a className="mt-2 btn btn-primary" href="#" role="button">Source Code</a>
                </div>
            </>
        )
    }
}

export default About
