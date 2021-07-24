import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';

const Nav = () => {
    window.addEventListener('scroll',()=>{

        var nav=document.querySelector('nav');
        var navElement=document.querySelectorAll('nav li:not(.ni)');
        if(window.scrollY >= 100){
            nav.style.backgroundColor="#fff";
            navElement.forEach((el)=>{
                el.style.color="#000";
            })
        }
        else if (window.screenY <= 100){
            nav.style.backgroundColor="transparent";
            navElement.forEach((el)=>{
                el.style.color="#fff";
            })
        }
    });
    return (
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <ul>
                    <li>Ground-Truth Data</li>
                    <li>How it Works</li>
                    <li>Free Structure</li>
                    <li>Example Deliverables</li>
                    <li>Submission Portal</li>
                    <li>Contact Us</li>
                    <li className="ni">Sign In</li>
                </ul>
            </nav>
    );
};

export default Nav;