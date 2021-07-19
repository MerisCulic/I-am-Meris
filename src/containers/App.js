import React, {Component} from 'react';
import NavigationBar from '../components/Navigation/NavigationBar';
import Homepage from '../components/Homepage/Homepage';
import NASA from '../components/Pages/NASA/NASA';
import AboutMe from '../components/Pages/AboutMe/AboutMe';
import WebDevelopment from '../components/Pages/WebDevelopment/WebDevelopment';
import GraphicDesign from '../components/Pages/GraphicDesign/GraphicDesign';
import Photography from '../components/Pages/Photography/Photography';
import TheIndirectRoute from '../components/Pages/Trips/TheIndirectRoute/TheIndirectRoute';
import ChernobylTrip from '../components/Pages/Trips/ChernobylTrip/ChernobylTrip';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import './App.css';


const initialState = {
  route: 'home',
  gallery: 'weddings'
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

  render() {
    const {route, gallery} = this.state;

    let page;
    if (route === 'home') {
        page = "";
    } else if (route === 'apod'){
        page = <NASA />;
    } else if (route === 'aboutme'){
        page = <AboutMe onRouteChange={this.onRouteChange}/>;
    } else if (route === 'webdev'){
        page = <WebDevelopment />;
    } else if (route === 'graphicdesign'){
        page = <GraphicDesign />;
    } else if (route === 'photography'){
        page = <Photography gallery={gallery} onGalleryChange={this.onGalleryChange}/>;
    } else if (route === 'theIndirectRoute'){
        page = <TheIndirectRoute />;
    } else if (route === 'chernobylTrip'){
      page = <ChernobylTrip />;
  }

    return (
      <div className="App">
        <ErrorBoundary>
          <NavigationBar onRouteChange={this.onRouteChange} />
          <Homepage onRouteChange={this.onRouteChange} />
          <div className="Page">
              {page}
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
