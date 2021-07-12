import React, {Component} from 'react';
import NavigationBar from '../components/Navigation/NavigationBar';
import PageRender from '../components/PageRender/PageRender';
import Homepage from '../components/Homepage/Homepage';
import './App.css';


const initialState = {
  route: 'home',
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    const route = this.state.route;
    return (
      <div className="App">
        <NavigationBar onRouteChange={this.onRouteChange} />
        <Homepage onRouteChange={this.onRouteChange} />
        <PageRender route={route}/>
      </div>
    );
  }
}

export default App;
