import React from 'react';
import logo from './Logos/merislogo.png';
import './NavigationBar.css';


const NavigationBar = ({onRouteChange}) => {

    function dropdownMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
    }
    
    return (
        <div className="navbar pa3">
            <img id="navbarLogo" onClick={() => onRouteChange("home")} className="pointer" src={logo} alt=""/>
            <div className="dropdown pointer">
                <button onClick={() => dropdownMenu()}  className="dropbtn">
                    Menu
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <p onClick={() => onRouteChange("home")}>Home</p>
                    <p onClick={() => onRouteChange("aboutme")}>About</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;