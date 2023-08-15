
import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import { Component } from 'react';
import ClarifaiImageApiReq from './apiUtils/clarifaiImageApiReq'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

class App extends Component {

  constructor () {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      imageConcepts: [],
      route: 'signin',
      isSignedIn: false

    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    if(!this.state.input) {
      this.setState({ imageConcepts: ["empty url"]});
      return;
    }
    
    ClarifaiImageApiReq.request(this.state.input)
        .then(response => {
            const concepts = response.outputs[0].data.concepts.map(item => item.name);
            this.setState({ imageConcepts: concepts });
        })
        .catch(error => {
          this.setState({ imageConcepts: ["Something went wrong :/"]});
        });
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, imageConcepts } = this.state;
    return (
      <div className="App">
        <ParticlesBg type='cobweb' bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
        route === 'home' ? 
          <>
              <Logo /> 
              {/* <Rank /> */}
              <ImageLinkForm 
                onButtonSubmit={this.onButtonSubmit} 
                onInputChange={this.onInputChange}
              />
              <ImageRecognition imageUrl={imageUrl} imageConcepts={imageConcepts} />
            </>
            : (
              route === 'signin' ? 
                <Signin onRouteChange={this.onRouteChange} /> 
                :
                <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
  
}

export default App;
