import React from 'react';
import fb from './Images/fb_icon.png';
import ig from './Images/ig_icon.png';
import github from './Images/github_icon.png';
import email from './Images/mail_icon.png';
import location from './Images/location_icon.png';
import './Contact.css';


const Contact = () => {
    function copyFunc() {
        let tooltip = document.getElementById("myTooltip");
        try {
            navigator.clipboard.writeText('meris.culic@gmail.com');
            tooltip.innerHTML = "E-mail address copied to clipboard!";
        }
        catch(err) {
            tooltip.innerHTML = "meris.culic@gmail.com";
            tooltip.style.width = "fit-content"
        }
    }

    function outFunc() {
        let tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    return (
        <>
        <div className="Contact">
            <h3 className="">Contact</h3>
            <div className="flex">
                <div className="tooltip">
                    <img id="" src={location} alt="" width="30px" height="auto" className="pa2 pointer grow"/>
                    <span className="tooltiptext" id="location">Jesenice, Slovenia</span>
                </div>
                <div className="tooltip">
                    <img id="email" src={email} alt="" width="30px" height="auto" className="pa2 pointer grow" 
                        onClick={()=> copyFunc()}
                        onMouseOut={()=> outFunc()}
                    />
                    <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                </div>
                <img id="" src={github} alt="" width="30px" height="auto" className="pa2 pointer grow" onClick={()=> window.open("https://github.com/MerisCulic", "_blank")}/>
                <img id="" src={fb} alt="" width="30px" height="auto" className="pa2 pointer grow" onClick={()=> window.open("https://www.facebook.com/meris.culic", "_blank")}/>
                <img id="" src={ig} alt="" width="30px" height="auto" className="pa2 pointer grow" onClick={()=> window.open("https://www.instagram.com/merisculic/", "_blank")}/>       
            </div>
        </div>
        </>
    )
}

export default Contact;