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
    for (var i = 0; i < 6; i++) {
      axios.get(`https://www.thecolorapi.com/id?hex=${radomValue()}`)
        .then((response) => {
          colorArray.push(response.data)
          this.setState({ colors: colorArray });
        })
        .catch((e) => console.log(e))
    }
  }

  handleClick = (colorName, colorValue) => {
    const { index } = this.props;
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
          <span onClick={() => this.handleClick(color.name.value, color.name.closest_named_hex)} className="fa fa-unlock-alt text-light"></span>
          <span onClick={() => this.props.templateColor(color.name.closest_named_hex, color.name.distance.toString())} className="fa fa-eyedropper ml-2 text-light"></span>
          <span onClick={() => this.props.fontLightDark()} className="fa fa-bolt ml-2 text-light"></span>
          <span className="ml-3 text-light">{color.name.closest_named_hex}</span>
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
      <div className="mb-2">
        <div className="palette-color-container">
          {this.renderColors()}
        </div>
        <div className="project-pal-nav ml-auto mr-auto">
          <div className="col-md-6 text-center"><button className="btn btn-default col-md-6 btn-round" onClick={this.getColors}><i className="fa fa-refresh mr-2 btn-custom"></i>Get Colors</button></div>
          <div className="col-md-6 text-center"><button className="btn btn-default col-md-6 btn-round" onClick={this.props.clearTemplateColor}><i className="fa fa-times mr-2 btn-custom"></i>Reset</button></div>
        </div>
      </div>
    )
  }
}