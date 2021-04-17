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
          <img className="color-image" alt={color.name.value} src={color.image.named} />
          
          <span onClick={ () => this.handleClick(color.name.value, color.name.closest_named_hex) } class="fa fa-lock ml-2 text-light"></span> 
          <span onClick={ () => this.props.templateColor(color.name.closest_named_hex) } class="fa fa-eyedropper ml-3 text-light"></span>
          <span class="ml-3 text-light">{color.name.closest_named_hex}</span>
          </div>
          <div className="tile-color">
            {/* {vals.name.value} */}
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
        <div class="palette-color-container">
          
          {this.renderColors()}        
        </div>
        <div className="project-pal-nav">
              <div ><button className="btn btn-default" onClick={this.getColors}>Get Colors</button></div>
              <div className="project-dropdown"><button className="btn btn-default" onClick={this.props.clearTemplateColor}>Reset Colors</button></div>
        </div>            
      </div>
    )
  }
}