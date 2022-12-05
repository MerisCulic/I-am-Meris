import React, { Component, Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import screenfull from 'screenfull';
import PageLayout from '../components/Pages/PageLayout';
import NavigationBar from '../components/Navigation/NavigationBar';
import Homepage from '../components/Homepage/Homepage';
import AboutMe from '../components/Pages/AboutMe/AboutMe';
import WebDevelopment from '../components/Pages/WebDevelopment/WebDevelopment';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Loading from '../components/Loading/Loading'
import Contact from '../components/Contact/Contact';
import './App.css';
const APOD = lazy(() => import ('../components/Pages/APOD/APOD'));
const Photography = lazy(() => import ('../components/Pages/Photography/Photography'));
const GraphicDesign = lazy(() => import('../components/Pages/GraphicDesign/GraphicDesign'));
const TheIndirectRoute = lazy(() => import('../components/Pages/Trips/TheIndirectRoute/TheIndirectRoute'));
const ChernobylTrip = lazy(() => import('../components/Pages/Trips/ChernobylTrip/ChernobylTrip'));
const LegendeKragujevca = lazy(() => import('../components/Pages/Trips/LegendeKragujevca/LegendeKragujevca'));


const initialState = {
  gallery: 'weddings',
  isContactVisible: false
}


class App extends Component {
  constructor() {
    super()
    this.state = initialState
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
      /* Show Contact Card */
      return (
        card.classList.remove('hideCard'),
        card.classList.add('showCard'),
        card.style.display = 'block', 
        this.setState({isContactVisible: true})
      )
    } else {
      /* Hide Contact Card */
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
    const {gallery, isContactVisible} = this.state;

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

    return (
      <div className="App">
        <ErrorBoundary>
          <NavigationBar toggleContactCard={this.toggleContactCard} />
          <Homepage toggleContactCard={this.toggleContactCard} />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<PageLayout />} >
                <Route path="/" element={""} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/apod" element={<APOD toggleFullscreen={this.toggleFullscreen}/>} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/photography" element={<Photography gallery={gallery} onGalleryChange={this.onGalleryChange}/>} />
                <Route path="/the-indirect-route" element={<TheIndirectRoute toggleFullscreen={this.toggleFullscreen}/>} />
                <Route path="/unpeacefull-atom" element={<ChernobylTrip  toggleFullscreen={this.toggleFullscreen}/>} />
                <Route path="/legende-kragujevca" element={<LegendeKragujevca toggleFullscreen={this.toggleFullscreen}/>} />
              </Route>
              <Route path="*" element={<ErrorBoundary />} />
            </Routes>
          </Suspense>
          <Contact />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
