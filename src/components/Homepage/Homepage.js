import React from 'react';
import { Link } from 'react-router-dom';
import NASApatch from "./Images/APOD-patch.png";
import WebDevLogo from "./Images/WebDevLogo.png";
import GraphicDesignLogo from "./Images/GraphicDesignLogo.png";
import PhotographyLogo from "./Images/PhotographyLogo.png";
import AboutMeLabel from "./Images/AboutMeLabel.png";
import ContactLabel from "./Images/ContactLabel.png";
import "./Homepage.css";

const Homepage = ({toggleContactCard}) => {
    return (
        <div>
            <div className="projectsNavigation">
                <div className="flex space-around">
                    <Link to="/web-development" className='text-link'>
                        <div className="hide-child ma1">
                            <img id="webdevIcon" className="pointer" src={WebDevLogo} alt=""/>
                            <p className="bg-washed-green br3 pa2 pointer child tc">Web development</p>
                        </div>
                    </Link>
                    <Link to="/graphic-design" className='text-link'>
                        <div className="hide-child ma1">
                            <img id="graphicdesignIcon" className="pointer" src={GraphicDesignLogo} alt=""/>
                            <p className="bg-washed-green br3 ma4 pa2 pointer child tc">Graphic design</p>
                        </div>
                    </Link>
                    <Link to="/photography" className='text-link'>
                        <div className="hide-child ma1">
                            <img id="photographyIcon" className="pointer" src={PhotographyLogo} alt=""/>
                            <p className="bg-washed-green br3 pa2 pointer child tc">Photography</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Link to="/about-me" className='text-link'><img id="AboutLabel" className="pointer pa2" src={AboutMeLabel} alt=""/></Link>
            <Link to="/apod" className='text-link'><img id="NASApatch" className="pointer pa4 " src={NASApatch} alt="" /></Link>
            <img id="ContactLabel" className="pointer pa2" src={ContactLabel} alt="" onClick={() => toggleContactCard()}/>
        </div>
    )
}

export default Homepage;