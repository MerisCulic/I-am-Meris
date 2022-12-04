import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import merisLogo from './Logos/merislogo.png';
import homeLogo from './Logos/homeLogo.png';
import finger from './Logos/finger.png';
import './NavigationBar.css';


const NavigationBar = ({toggleContactCard}) => {

    /* Small screen dropdown menu */
    function dropdownMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Toggle main logo and homepage logo */
    const location = useLocation();
    let logo;
    if(location.pathname === "/") {
        logo = merisLogo;
    } else {
        logo = homeLogo;
    }

    return (
        <div className="navbar pa3">
            <img id="finger" className="slideInOut" src={finger} alt=""/>
            <Link to="/"><img id="navbarLogo" className="pointer" src={logo} alt="" /></Link>
            <div className="dropdown pointer">
                <button onClick={() => dropdownMenu()}  className="dropbtn">
                    Menu
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/" className='text-link'><p>Home</p></Link>
                    <Link to="/about-me" className='text-link'><p>About</p></Link>
                    <p id="dropdownContact" onClick={() => toggleContactCard()}>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;