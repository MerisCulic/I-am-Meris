import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import NASA from './Pages/NASA/NASA';
import AboutMe from './Pages/AboutMe/AboutMe';
import Contact from './Pages/Contact/Contact';
import Guestbook from './Pages/Guestbook/Guestbook';
import WebDevelopment from './Pages/WebDevelopment/WebDevelopment';
import GraphicDesign from './Pages/GraphicDesign/GraphicDesign';
import Photography from './Pages/Photography/Photography';


const PageRender = ({route}) => {
    console.log('render', route)
    if (route === 'home') {
        return <Homepage />;
    } else if (route === 'NASA'){
        return <NASA />;
    } else if (route === 'aboutme'){
        return <AboutMe />;
    } else if (route === 'contact'){
        return <Contact />;
    } else if (route === 'guestbook'){
        return <Guestbook />;
    } else if (route === 'webdev'){
        return <WebDevelopment />;
    } else if (route === 'graphicdesign'){
        return <GraphicDesign />;
    } else if (route === 'photography'){
        return <Photography />;
    } else {
        return 'Error in routing';
    }
}

export default PageRender;