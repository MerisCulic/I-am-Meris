import React from 'react';
import logo from './Logos/merislogo.png';
import './NavigationBar.css';


const NavigationBar = ({onRouteChange}) => {
    
    return (
        <div className="navbar">
            <div className="topbar ma3">
                <img id="navbarLogo" onClick={() => onRouteChange("home")} className="pointer" src={logo} alt=""/>
                <div className="links">
                    <p id="aboutme" onClick={() => onRouteChange("aboutme")} className="f4 link dim pa2 pr3 pointer">About me</p>
                    <p id="contact" onClick={() => onRouteChange("contact")} className="f4 link dim pa2 pr3 pointer">Contact</p>
                    <p id="guestbook" onClick={() => onRouteChange("guestbook")} className="f4 link dim pa2 pr3 pointer">Guestbook</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;