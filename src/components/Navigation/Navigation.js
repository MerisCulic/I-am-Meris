import React, {Component} from 'react';
import logo from './Logos/merislogo.png';
import devIcon from './Logos/webdev.png';
import grDesIcon from './Logos/graphicdesign.png';
import photoIcon from './Logos/photography.png';
import './Navigation.css'


class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            navIsExpanded: false
        }
    }
    
    toggleNavbar = () => {
        let x = document.getElementsByClassName("expandable");
        let y = document.getElementById("navbarLogo");

        if(this.state.navIsExpanded) {
            for(let i = 0; i < x.length; i++) {
                x[i].classList.add("closed");
                setTimeout(() => {
                    x[i].style.display = "none";
                    this.setState({navIsExpanded: false})
                }, 2000)
            }
            y.classList.remove("spin");
        } else {
            for(let i = 0; i < x.length; i++) {
                x[i].classList.remove("closed");
                x[i].style.display = "inline";
            }
            y.classList.add("spin");
            this.setState({navIsExpanded: true})
        }
    }


    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="navbar ma3">
                <img onClick={() => this.toggleNavbar()} id="navbarLogo" className="pointer" src={logo} alt=""/>
                <p id="aboutme" onClick={() => onRouteChange("aboutme")} className="expandable f4 link dim pa2 pointer">About me</p>
                <p id="contact" onClick={() => onRouteChange("contact")} className="expandable f4 link dim pa2 pointer">Contact</p>
                <p id="guestbook" onClick={() => onRouteChange("guestbook")} className="expandable f4 link dim pa2 pointer">Guestbook</p>
                <div className="expandable webdev description hide-child" onClick={() => onRouteChange("webdev")}>
                    <img id="webdevIcon" className="pointer" src={devIcon} alt=""/>
                    <p className="pa2 pointer child">Web development</p>
                </div>
                <div className="expandable graphicdesign description hide-child" onClick={() => onRouteChange("graphicdesign")}>
                    <img id="graphicdesignIcon" className="pointer" src={grDesIcon} alt=""/>
                    <p className="pa2 pointer child">Graphic Design</p>
                </div>
                <div className="expandable photography description hide-child" onClick={() => onRouteChange("photography")}>
                    <img id="photographyIcon" className="pointer" src={photoIcon} alt=""/>
                    <p className="pa2 pointer child">Photography</p>
                </div>
            </div>
        );
    }
}

export default Navigation;