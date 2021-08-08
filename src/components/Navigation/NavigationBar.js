import React from 'react';
import merisLogo from './Logos/merislogo.png';
import homeLogo from './Logos/homeLogo.png';
import finger from './Logos/finger.png';
import './NavigationBar.css';


const NavigationBar = ({route, onRouteChange, toggleContactCard}) => {

    function dropdownMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    let logo;
    if(route === 'home') {
        logo = merisLogo;
    } else {
        logo = homeLogo;
    }
    
    return (
        <div className="navbar pa3">
            <img id="finger" className="slideInOut" src={finger} alt=""/>
            <img id="navbarLogo" className="pointer" src={logo} alt=""
                onClick={() => { onRouteChange("home")}}/>
            <div className="dropdown pointer">
                <button onClick={() => dropdownMenu()}  className="dropbtn">
                    Menu
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <p onClick={() => onRouteChange("home")}>Home</p>
                    <p onClick={() => onRouteChange("aboutme")}>About</p>
                    <p id="dropdownContact" onClick={() => toggleContactCard()}>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;