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
  console.log(this.state);
}

  onPictureInputChange = (event) => {
      console.log(event.target.value);  
      this.setState({imageUrl: event.target.value }); 
  }

  onPictureSubmit = () => {
      console.log('submit');
      // e466caa0619f444ab97497640cefc4dc
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
        console.log(this.state)
      })

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
      let resp = '';
    resp = [
      {id: "ai_GpPWwwsB", name: "jennifer aniston", value: 0.9960928, app_id: "main"},
      {id: "ai_QVgWQrR4", name: "julianne hough", value: 0.00020897458, app_id: "main"},
      {id: "ai_tGxnpXJ4", name: "kate ritchie", value: 0.00007608413, app_id: "main"},
      {id: "ai_Ml5m4s18", name: "scout taylor-compton", value: 0.00007062289, app_id: "main"},
      {id: "ai_kCFKSMv7", name: "kate lawler", value: 0.00006158528, app_id: "main"},
      {id: "ai_PWj7jHXR", name: "lo bosworth", value: 0.000051587213, app_id: "main"},
      {id: "ai_wlLdVjD7", name: "joelle fletcher", value: 0.000043179265, app_id: "main"},
      {id: "ai_4QHLLzFS", name: "leona lewis", value: 0.000042781277, app_id: "main"},
      {id: "ai_3tnrzzVR", name: "lauren goodger", value: 0.00003473853, app_id: "main"},
      {id: "ai_FcKQC2vw", name: "gemma atkinson", value: 0.000030117346, app_id: "main"},
      {id: "ai_lghkqQKM", name: "kim zolciak", value: 0.00002670768, app_id: "main"},
      {id: "ai_r1mfqldP", name: "kellie pickler", value: 0.000026193484, app_id: "main"},
      {id: "ai_wfF092tM", name: "zosia mamet", value: 0.000025956066, app_id: "main"},
      {id: "ai_JcQ5fkbJ", name: "paula creamer", value: 0.00002390949, app_id: "main"},
      {id: "ai_f0WfmHNb", name: "jillian harris", value: 0.000021453252, app_id: "main"},
      {id: "ai_l039tGRc", name: "katie chonacas", value: 0.000019441668, app_id: "main"},
      {id: "ai_NkJNLwsz", name: "caitlin wachs", value: 0.000018746348, app_id: "main"},
      {id: "ai_Fszpk8mS", name: "traylor howard", value: 0.000016023921, app_id: "main"},
      {id: "ai_8rCrdTQq", name: "robin wright penn", value: 0.00001559294, app_id: "main"},
      {id: "ai_B16FjP1T", name: "meghan trainor", value: 0.0000149889565, app_id: "main"}
    ];
    this.setState({celebrityimageresponse: resp});

  //     app.models.predict(MODEL_TYPE_KEY, this.state.imageUrl)
  //     .then(
  //   function(response) {
  //     // do something with response
  //     console.log(response);
  //     // let names = response.
  //     console.log(response.outputs[0].data.regions[0].data.face.identity.concepts)
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
