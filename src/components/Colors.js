import React, { Component } from 'react'
import axios from 'axios';

export default class Colors extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
    }
    this.getColors = this.getColors.bind(this)
  }

  getColors() {
    function radomValue() {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    }

    let colorArray = [];
    for (var i = 0; i < 5; i++) {
      axios.get(`https://www.thecolorapi.com/id?hex=${radomValue()}`)
        .then((response) => {
          colorArray.push(response.data)
          this.setState({ colors: colorArray });
        })
        .catch((e) => console.log(e))
    }
  }

  handleClick = (colorName, colorValue) => {
    // console.log(colorName)
    const {index} = this.props;
    axios
      .put(`/api/color/${index}`, { colorName, colorValue })
      .then((response) => {
        this.props.updateProjects(response.data);
      })
      .catch((e) => console.log(e));
  }

  renderColors = () => {
    const mappedColors = this.state.colors.map((color, i) => (
        <div key={i} className="image-card">
          <div className="tile-card">
          <button 
            onClick={ () => this.handleClick(color.name.value, color.name.closest_named_hex) }>
            <img alt={color.name.value} className="color-image" src={color.image.named} />
          </button>
            
          </div>
          <div className="tile-color">
            {/* {vals.name.value} */}
            {color.name.value}
            {color.name.closest_named_hex}
          </div>
        </div>
    ))
    return mappedColors;
  };

  componentDidMount() {
    this.getColors()
  }

  render() {

    return (
      <div>
        <button onClick={this.getColors}>Get Colors</button>
        {this.renderColors()}
      </div>
      
    )
  }
}
