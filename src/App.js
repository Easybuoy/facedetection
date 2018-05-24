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

const MODEL_TYPE_KEY = 'e466caa0619f444ab97497640cefc4dc';
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
      isSignedIn: false,
      user: {
        id: '',
        email: '',
        name: '',
        entries: 0,
        joined: ''
      },
      celebrityimageresponse: ''
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data._id,
      email: data.email,
      name: data.name,
      entries: data.entries,
      joined: data.date_joined
    }  
  })
}

  onPictureInputChange = (event) => { 
      this.setState({imageUrl: event.target.value }); 
  }

  onPictureSubmit = () => {
      // e466caa0619f444ab97497640cefc4dc
      

    //   fetch('https://www.google.com/search?q=davido&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjD7d-X64nbAhUD26QKHSHGAhoQ_AUICygC', 
    //   {
    //     // mode: 'no-cors'
    //     method: 'GET',
    //     header: {'content-type': 'application/json'},

        
    //     // accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //     // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3430.0 Safari/537.36',
    // })
    //   // .then(res => res.json())
    //   .then(response => {
    //     if(response){
          
    //     }
    //   })
    //   .catch(err=> console.log(err));
      app.models.predict(MODEL_TYPE_KEY, this.state.imageUrl)
      .then(
    (response)  => {
      // do something with response
      // let names = response.
      if(response){ 
        let resp = response.outputs[0].data.regions[0].data.face.identity.concepts; 
        this.setState({celebrityimageresponse: resp});

        fetch('http://localhost:3001/image', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: this.state.user.id
        }) 
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
      }

    },
    (err) => {
      // there was an error
      console.log(err);
    }
  );

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
          <Logo />
          {
            this.state.route === 'home' ?
          <div> 
          {/* <Logo /> */}
          <Rank name = {this.state.user.name} entries = {this.state.user.entries}/>
          <ImageLinkForm onPictureInputChange = {this.onPictureInputChange} onPictureSubmit={this.onPictureSubmit}/>
          <FaceRecognition celebrityImageResponse = {this.state.celebrityimageresponse}/>
            </div>
            :
            (
              this.state.route === 'signin' ?
              <SignIn onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
              :
              <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} />
            )
            
          }
          
               
                
      </div>
    );
  }
}

export default App;
