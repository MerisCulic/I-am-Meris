import React from 'react';
import "./WebDevelopment.css";
import NinjaTech from "./Logos/NinjaTechForum.png";
import SmartBrain from "./Logos/SmartBrain.png";
import GuessTheNumber from "./Logos/GuessTheNumber.png";
import Robofriends from "./Logos/Robofriends.png";

const WebDevelopment = () => {
    return (
        <>
        <div className="WebDevelopment">
        <div className="gallery bg-light-green pa2 br4 fl w-100 shadow-3">
                <h1 className="dib pa2 v-top">Web development</h1>
                <div className="bg-washed-green pa2 br4 fl w-100">
                    <div className="applistitem">
                        <img src={NinjaTech} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://ninja-tech-forum.herokuapp.com/", "_blank")}
                        />
                        <div className="tc ma2">
                            <p>Smart Ninja Web Development 2 training</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/NinjaTechForum", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={SmartBrain} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://smart-brain--face-det-app.herokuapp.com/", "_blank")}
                        />
                        <div className="tc ma2">
                            <p>Face recognition application with the use of Clarifai AI API (final project for ZTM course).</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Smart_Brain_api", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={Robofriends} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://robofriends-ztm.herokuapp.com/", "_blank")}
                        />
                        <div className="tc ma2">
                            <p>ZTM academy training.</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Robofriends", "_blank")}>
                                View Code
                            </h4>
                        </div>  
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={GuessTheNumber} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://guess-the-secret-number-game.herokuapp.com/", "_blank")}
                        />
                        <div className="tc ma2">
                            <p>Smart Ninja training.</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Guess_the_number", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WebDevelopment;