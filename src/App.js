import React, { Component } from 'react';
// import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: 'b37b09a823aa43a6a1836c962c23fa47'
 });


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
      imageUrl: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
      console.log(event);   
  }

  onButtonSubmit = () => {
      console.log('submit');
      // e466caa0619f444ab97497640cefc4dc

    //   fetch('https://www.google.com/search?q=davido&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjD7d-X64nbAhUD26QKHSHGAhoQ_AUICygC', 
    //   {
    //     // mode: 'no-cors'
    //     method: 'GET',
    //     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3430.0 Safari/537.36',
    // })
    //   .then(res => console.log(res))
    //   .catch(err=> console.log(err));


  //     app.models.predict('e466caa0619f444ab97497640cefc4dc', "http://www.osundefender.com/wp-content/uploads/2013/12/WHIZKID.jpg")
  //     .then(
  //   function(response) {
  //     // do something with response
  //     console.log(response);
  //   },
  //   function(err) {
  //     // there was an error
  //     console.log(err);
  //   }
  // );

  }


  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false});
    }else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
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
          
          <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} />
          {
            this.state.route === 'home' ?
          <div> 
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition />
            </div>
            :
            (
              this.state.route === 'signin' ?
              <SignIn onRouteChange = {this.onRouteChange} />
              :
              <Register onRouteChange = {this.onRouteChange} />
            )
            
          }
          
               
                
      </div>
    );
  }
}

export default App;
