import React from 'react';
import logo from './Logos/merislogo.png';
import devIcon from './Logos/webdev.png';
import grDesIcon from './Logos/graphicdesign.png';
import photoIcon from './Logos/photography.png';
import './NewNavigation.css';


const NewNavigation = ({onRouteChange}) => {
    
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
            <div className="sidebar">
                <div className="webdev description hide-child" onClick={() => onRouteChange("webdev")}>
                    <img id="webdevIcon" className="pointer" src={devIcon} alt=""/>
                    <p className="pa2 pointer child">Web development</p>
                </div>
                <div className="graphicdesign description hide-child" onClick={() => onRouteChange("graphicdesign")}>
                    <img id="graphicdesignIcon" className="pointer" src={grDesIcon} alt=""/>
                    <p className="pa2 pointer child">Graphic Design</p>
                </div>
                <div className="photography description hide-child" onClick={() => onRouteChange("photography")}>
                    <img id="photographyIcon" className="pointer" src={photoIcon} alt=""/>
                    <p className="pa2 pointer child">Photography</p>
                </div>
            </div>
        </div>
    );
}

export default NewNavigation;