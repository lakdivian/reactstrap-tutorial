import React, { Component } from 'react';
import ReactstrapButton from './components/ReactstrapButton';
import ReactstrapNavbar from './components/ReactstrapNavbar';
import ReactstrapAlert from './components/ReactstrapAlert';
import ReactstrapCarousel from './components/ReactstrapCarousel';
import WelcomePage from './Pages/WelcomPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="text-center text-primary header">ReactStrap Course</h1> */}
        <Router>  
          <ReactstrapNavbar />  
          <Route exact path="/" component={ WelcomePage } /> 
          <Route path="/button" component={ ReactstrapButton } />
          <Route path="/alerts" component={ ReactstrapAlert } />
          <Route path="/carousel" component={ ReactstrapCarousel } />
        </Router>
      </div>
    );
  }
}

export default App;
