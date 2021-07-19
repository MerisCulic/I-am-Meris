import React from 'react';
import NASApatch from "./Images/APOD-patch.png";
import WebDevLogo from "./Images/WebDevLogo.png";
import GraphicDesignLogo from "./Images/GraphicDesignLogo.png";
import PhotographyLogo from "./Images/PhotographyLogo.png";
import HomeArrow from "./Images/home.png";
import AboutMe from "./Images/AboutMe.png";
import "./Homepage.css";

const Homepage = ({onRouteChange}) => {
    return (
        <div>
            <div className="projectsNavigation">
                <div className="flex space-around">
                    <div className="hide-child ma1" onClick={() => onRouteChange("webdev")}>
                        <img id="webdevIcon" className="pointer" src={WebDevLogo} alt=""/>
                        <p className="bg-washed-green br3 pa2 pointer child tc">Web development</p>
                    </div>
                    <div className="hide-child ma1" onClick={() => onRouteChange("graphicdesign")}>
                        <img id="graphicdesignIcon" className="pointer" src={GraphicDesignLogo} alt=""/>
                        <p className="bg-washed-green br3 ma4 pa2 pointer child tc">Graphic design</p>
                    </div>
                    <div className="hide-child ma1" onClick={() => onRouteChange("photography")}>
                        <img id="photographyIcon" className="pointer" src={PhotographyLogo} alt=""/>
                        <p className="bg-washed-green br3 pa2 pointer child tc">Photography</p>
                    </div>
                </div>
            </div>
            <img id="AboutLogo" className="pointer pa2" src={AboutMe} alt="" onClick={() => onRouteChange("aboutme")}/>
            <img id="homeArrow" className="" src={HomeArrow} alt="" />
            <img id="NASApatch" className="pointer pa4 " src={NASApatch} alt="" onClick={() => onRouteChange("apod")} />
        </div>
    )
}

export default Homepage;