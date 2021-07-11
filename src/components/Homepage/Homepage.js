import React from 'react';
import NASApatch from "./APOD-patch.png";
import "./Homepage.css";

const Homepage = ({onRouteChange}) => {
    return (
        <div>
            <img id="NASApatch" className="pointer pa4 " src={NASApatch} alt="" onClick={() => onRouteChange("NASA")} />
        </div>
    )
}

export default Homepage;