import React, {Component} from 'react';
import screenfull from 'screenfull';
import NavigationBar from '../components/Navigation/NavigationBar';
import Homepage from '../components/Homepage/Homepage';
import APOD from '../components/Pages/APOD/APOD';
import AboutMe from '../components/Pages/AboutMe/AboutMe';
import WebDevelopment from '../components/Pages/WebDevelopment/WebDevelopment';
import GraphicDesign from '../components/Pages/GraphicDesign/GraphicDesign';
import Photography from '../components/Pages/Photography/Photography';
import TheIndirectRoute from '../components/Pages/Trips/TheIndirectRoute/TheIndirectRoute';
import ChernobylTrip from '../components/Pages/Trips/ChernobylTrip/ChernobylTrip';
import LegendeKragujevca from '../components/Pages/Trips/LegendeKragujevca/LegendeKragujevca';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Contact from '../components/Contact/Contact';
import './App.css';


const initialState = {
  route: 'home',
  gallery: 'weddings',
  isContactVisible: false
}


class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  onGalleryChange = (gallery) => {
    this.setState({gallery: gallery})
  }

  toggleFullscreen = (id) => {
    let ref = document.getElementById(id);
    if(screenfull.isEnabled) {
      screenfull.toggle(ref);
    }
  }

  toggleContactCard = () => {
    let card = document.getElementById("contactCard");
    if(!this.state.isContactVisible) {
      return (
        card.classList.remove('hideCard'),
        card.classList.add('showCard'),
        card.style.display = 'block', 
        this.setState({isContactVisible: true})
      )
    } else if(this.state.isContactVisible){
      return (
        card.classList.remove('showCard'),
        card.classList.add('hideCard'),
        setTimeout(function() {
          card.style.display = 'none'
        }, 1000),
        this.setState({isContactVisible: false})
      )
    }
  }
  

  render() {
    const {route, gallery, isContactVisible} = this.state;

    /* Hide small screen dropdown menu and/or contact card when off-clicking */
    window.onclick = (event) => {
      if (!event.target.matches('.contactCard') 
          && !event.target.matches('#ContactLabel')
          && !event.target.matches('#dropdownContact')
          && !event.target.matches('.tooltip img') 
          && isContactVisible === true) {
            this.toggleContactCard();
      } else if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    } 


    let page;
    if (route === 'home'){
        page = "";
    } else if (route === 'apod'){
        page = <APOD toggleFullscreen={this.toggleFullscreen}/>;
    } else if (route === 'aboutme'){
        page = <AboutMe onRouteChange={this.onRouteChange}/>;
    } else if (route === 'webdev'){
        page = <WebDevelopment />;
    } else if (route === 'graphicdesign'){
        page = <GraphicDesign />;
    } else if (route === 'photography'){
        page = <Photography gallery={gallery} onGalleryChange={this.onGalleryChange}/>;
    } else if (route === 'theIndirectRoute'){
        page = <TheIndirectRoute toggleFullscreen={this.toggleFullscreen}/>;
    } else if (route === 'chernobylTrip'){
        page = <ChernobylTrip  toggleFullscreen={this.toggleFullscreen}/>;
    } else if (route === 'legendeKragujevca'){
        page = <LegendeKragujevca toggleFullscreen={this.toggleFullscreen}/>;
    }
  

    return (
      <div className="App">
        <ErrorBoundary>
          <NavigationBar route={route} onRouteChange={this.onRouteChange} toggleContactCard={this.toggleContactCard}/>
          <Homepage onRouteChange={this.onRouteChange} toggleContactCard={this.toggleContactCard}/>
          <div className="page">
              {page}
          </div>
          <Contact />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
