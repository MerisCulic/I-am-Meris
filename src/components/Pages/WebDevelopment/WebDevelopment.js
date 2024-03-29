import React from 'react';
import "./WebDevelopment.css";
import IamMeris from "./Logos/merislogo2.jpg";
import NinjaTech from "./Logos/NinjaTechForum.png";
import SmartBrain from "./Logos/SmartBrain.png";
import GuessTheNumber from "./Logos/GuessTheNumber.png";
import Robofriends from "./Logos/Robofriends.png";
import BookBits from "./Logos/BookBits.png";
import Graditelj from "./Logos/Graditelj.png";
import PowerApps from "./Logos/PowerApps.png";


const WebDevelopment = () => {
    return (
        <>
        <div className="WebDevelopment">
        <div className="bg-light-green pa2 mb5 br4 fl w-100 shadow-3">
                <h1 className="dib pa2 v-top">Web development</h1>
                <div className="bg-washed-green pa2 br4 fl w-100">
                    <div className="applistitem">
                        <img src={IamMeris} alt="" width="auto" className="applogo ma2 br3 shadow-3"/>
                        <div className="appdesc ma2">
                            <p>
                                Wanted a website of my own for quite a while now, so here it is. 
                            </p>
                            <p>
                                It was built with React JS and is equipped with a resposive design. 
                                Try it out on differently sized screens.
                            </p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/I-am-Meris", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={Graditelj} alt="" height="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://graditelj.net/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>
                                Graditelj's website - a construction company located in Jesenice, Slovenia. 
                            </p>
                            <p>
                                Made from scratch with HTML, SASS & JS with implementations of Parallax.js and FullPage.js.
                            </p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Graditelj", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={BookBits} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://book-bits.herokuapp.com/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>
                                Have you stumbled upon a great idea, fact or quote while reading? Has that little bit of your book
                                made you think, or maybe question things? Share it with others on Book Bits.
                            </p>
                            <p>
                                Created with Python, flask and Bootstrap.
                            </p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/BookBits", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={PowerApps} alt="" height="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://merisculic.github.io/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>
                                A presentational web page for Microsoft's PowerApps.
                            </p>
                            <p>
                                Created with HTML, SASS and a big spoon of animations.
                            </p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Graditelj", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={SmartBrain} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://smart-brain--face-det-app.herokuapp.com/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>
                                A face recognition app that uses the Clarifai API (application programming interface) to detect a face within an image.
                                Find a photo of a face online and copy its URL into the input and try it out. 
                            </p>
                            <p>
                                React JS, final ZTM course project.
                            </p>
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
                        <div className="appdesc ma2">
                            <p>A fast filtering app created with React (ZTM academy training).</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/Robofriends", "_blank")}>
                                View Code
                            </h4>
                        </div>  
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={NinjaTech} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://ninja-tech-forum.herokuapp.com/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>A basic forum built with Python (Smart Ninja Web Development 2 training).</p>
                            <h4 className="viewCode pointer shadow-3 grow" 
                                onClick={()=> window.open("https://github.com/MerisCulic/NinjaTechForum", "_blank")}>
                                View Code
                            </h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="applistitem">
                        <img src={GuessTheNumber} alt="" width="auto" className="applogo ma2 pointer br3 shadow-3 grow"
                            onClick={()=> window.open("https://guess-the-secret-number-game.herokuapp.com/", "_blank")}
                        />
                        <div className="appdesc ma2">
                            <p>See how many times it takes you to guess the correct number (Python, Smart Ninja training).</p>
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