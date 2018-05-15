import React, { Component } from 'react';
// import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      speed: 10
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
    }
    } 
}
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
      console.log(event);   
  }

  onButtonSubmit = () => {
      console.log('submit');
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
               <Particles className="particles"
                  params={particleOptions}
                  // style={{
                  //   width: '100%',
                  //   backgroundImage: `url(${logo})` 
                  // }}
                />
        <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          
          {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
