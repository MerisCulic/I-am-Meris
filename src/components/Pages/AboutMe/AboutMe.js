import React from 'react';
import './AboutMe.css';
import MerisPhoto from "./Meris.jpg";
import MMM from "./MMM.png";
import WBW from "./WBW.png";
import Startalk from "./Startalk.jpg";
import TimFerris from "./TimFerris.jpg";
import ChooseFi from "./ChooseFi.png";

const AboutMe = () => {
    return (
        <>
        <div className="AboutMe">
            <div className="bg-light-green pa2 ba bw1 br4 shadow-3">
                <img id="MerisPhoto" src={MerisPhoto} alt="" width="90px" height="auto" className="pa2 br4"/>
                <h1 className="dib pa2 v-top">Hello!</h1>
                <div className="bg-washed-green pa2 br4">
                    <h2 className="fl w-100">My name is Meris</h2>
                    <p>..and I love expressing my creative side which usually ends up as a photo in a photo album or as a web store's product image, 
                        as an event poster on a busy street, sometimes as a company logo on a bussiness card or as a memory-trigger of someone's 
                        first car on their new coffee mug. With a spark of curiosity and a wish to expand my usefullness I delved into the world
                        of web deveopment and found that creating web applications is a fun experience. Through countless online resources and 
                        a coding bootcamp called Smart Ninja I learned HTML5, CSS3, Python, flask, JavaScript, React, mySQL, git, Heroku and GitHub.</p>
                    <p>
                        My favourite way of spending free time is with exploration - travelling through foreign countries, finding new interesting 
                        places in our own, finding out what makes someone tick, and learning new things that I find interesting. 
                    </p>
                    <p>
                        Some of these free time activities were put in a written form: 
                    </p>
                    <ul>
                        <li>Taking the indirect route</li>
                        <li>(Un)peacefol atom</li>
                        <li>Legende Kragujevca [SLO]</li>
                    </ul>
                    <h3>Where I web-surf</h3>
                    <h4 className="pa2">Favourite blogs:</h4>
                    <ul>
                        <img id="MMM" src={MMM} alt="" width="auto" height="90px" className="pa2 mr3 pointer" 
                            onClick={()=> window.open("https://www.mrmoneymustache.com/2011/10/22/what-is-hedonic-adaptation-and-how-can-it-turn-you-into-a-sukka/", "_blank")}
                        />
                        <img id="WBW" src={WBW} alt="" width="auto" height="90px" className="pa2 pointer"
                            onClick={()=> window.open("https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html", "_blank")}
                        />  
                    </ul>
                    <h4 className="pa2">Favourite podcasts:</h4>
                    <ul>
                        <img id="Startalk" src={Startalk} alt="" width="auto" height="90px" className="pa2 pointer"
                            onClick={()=> window.open("https://www.youtube.com/watch?v=UvmWxm3nR6E", "_blank")}
                        />
                        <img id="TimFerris" src={TimFerris} alt="" width="auto" height="90px" className="pa2 pointer"
                            onClick={()=> window.open("https://tim.blog/2020/02/13/ryan-holiday-interviews-tim-ferriss/", "_blank")}
                        />
                        <img id="ChooseFi" src={ChooseFi} alt="" width="auto" height="90px" className="pa2 pointer"
                            onClick={()=> window.open("https://www.choosefi.com/100-welcome-to-the-fi-community/", "_blank")}
                        />
                    </ul>
                    
                </div>
                <h4 className="tc"><i>This website was made with love and powered by coffee</i></h4>
            </div>
        </div>
        </>

    )
}

export default AboutMe;