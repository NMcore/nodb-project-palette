import React, { Component } from 'react';
import axios from 'axios';
import NewDog from './components/NewDog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      dogs: [],
    }
    this.getColors = this.getColors.bind(this)
  }

  getColors() {
    function radomValue() {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    }

    let colorArray = [];
    for (var i = 0; i < 6; i++) {
      //scheme?format=json&hex=${radomValue()}
      //https://www.thecolorapi.com/id?hex=${radomValue()}
      axios.get(`https://www.thecolorapi.com/scheme?format=json&hex=${radomValue()}`)
        .then((response) => {
          colorArray.push(response.data)
          this.setState({ colors: colorArray });
        })
        .catch((e) => console.log(e))
    }
  }

  
  renderColors = () => {
    const mappedColors = this.state.colors.map((color, index) => (
        color.colors.map((vals, index) => (
            <div key={index} className="image-card">
                <div className="tile-card">
                  <img alt={vals.name.value} className="color-image" src={vals.image.named} />
                </div>
                <div className="tile-color">
                      {/* {vals.name.value} */}
                      {vals.name.closest_named_hex}
                </div>
            </div> 
        ))
      
    ));
    return mappedColors;
  };

  componentDidMount() {
    this.getColors()

    axios
      .get('/api/dogs')
      .then((response) => {
        this.setState({ dogs: response.data })
      })
      .catch();
  }

  updateDogs = (dogs) => {
    this.setState({ dogs })
  }

  render() {
    return (
      <div clas="main-wrapper">
        <header>
            <div className="header-logo">
              <h5><img width="100px" src="https://www.finlandia.edu/wp-content/uploads/2016/05/THE-Project-Logo.jpg"></img></h5>
            </div>
            <div className="header-search-nav">
                <div className="header-search">
                  <input className="header-search-input"/>
                  <button>Search</button>
                </div>
                <div className="header-nav">
                  <nav>
                    <a href="">Add</a> | 
                    <a href="">Edit</a> | 
                    <a href="">Remove</a> 
                    <span className="header-project-total">Projects (0)</span>
                  </nav>
                </div>
                
            </div>
        </header>
        <main>
          <div className="container">
              <div className="projects-container">
                <button>Left</button>
                <section>
                    <div className="projects-des">
                        <ul>
                            <li>Project Name: Fast API</li>
                            <li>Created By: Nick M</li>
                            <li>Description: First Project here, hope it goes well</li>
                        </ul>
                      </div>
                    <div class="project-colors-container">
                      i'm a color
                    </div>
                </section>
                <button>Right</button>
              </div>
              <div className="project-pal-nav">
                    <div className="project-heading">Select Colors</div>
                    <div className="project-dropdown">FF Update</div>
                    <div className="project-color-button">
                        <button onClick={this.getColors}>Get Colors</button>
                    </div>                  
              </div>        
              <div class="palette-color-container">
                  { this.renderColors() }
              </div>
              
          </div>          
        </main>



        <div className="app_container">
        {this.state.dogs.map((dog) => {
          return (
            <div className="dog_container">
              <img className="star_favorite" src="https://image.flaticon.com/icons/png/512/56/56786.png" alt="favorite" />
              <h1>Name: {dog.name}</h1>
              <h2>Breed: {dog.breed}</h2>
              <h2>Age: {dog.age}</h2>
              <img className="dog_image" src={dog.image} alt="dog_image" />
              <h3>About Me: {dog.bio}</h3>
            </div>
          )
        })}
        <NewDog updateDogs={this.updateDogs} />
        </div>




      </div>
    )
  }
}

export default App;
