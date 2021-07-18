import React from 'react';
import logo from './Logos/merislogo.png';
import AboutMe from './Logos/AboutMe.png';
import './NavigationBar.css';


const NavigationBar = ({onRouteChange}) => {
    
    return (
        <div className="navbar">
            <div className="topbar ma3">
                <img id="navbarLogo" onClick={() => onRouteChange("home")} className="pointer" src={logo} alt=""/>
                <div className="links">
                    <img id="AboutLogo" onClick={() => onRouteChange("aboutme")} className="pointer pa2" src={AboutMe} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;