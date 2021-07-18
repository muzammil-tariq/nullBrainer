import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';

const Nav = () => {
    return (
    
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <ul>
                    <li>Ground-Truth Data</li>
                    <li>How it Works</li>
                    <li>Free Structur</li>
                    <li>Example Deliverables</li>
                    <li>Submission Portal</li>
                    <li>Contact Us</li>
                    <li>Sign In</li>
                </ul>
            </nav>
    );
};

export default Nav;