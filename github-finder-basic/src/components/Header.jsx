import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <>
                <ul className="nav justify-content-between p-1 px-4 align-items-center">
                    <li className="nav-item lead">Github Finder</li>
                    <li className="nav-item d-flex align-items-center text-secondary">
                        <Link className="nav-link lead text-dark" to="/home">Home</Link> |
                        <Link className="nav-link lead text-dark" to="/">About</Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default Header
