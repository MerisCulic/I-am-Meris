import React from 'react';
import logo from './Logos/merislogo.png';
import './NavigationBar.css';


const NavigationBar = ({onRouteChange}) => {
    
    return (
        <div className="navbar">
            <div className="topbar ma3">
                <img id="navbarLogo" onClick={() => onRouteChange("home")} className="pointer" src={logo} alt=""/>
            </div>
        </div>
    );
}

export default NavigationBar;