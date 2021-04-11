import React, { Component } from 'react';
import axios from 'axios';

class NewDog extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      age: '',
      image: '',
      bio: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const {
      name, breed, age, image, bio
    } = this.state;

    axios
      .post('/api/dogs', { name, breed, age, image, bio })
      .then((response) => {
        // this.setState({ dogs: response.data })
        this.props.updateDogs(response.data);
      })
      .catch();
  }

  render() {
    return (
      <div>
        <input name="name" onChange={this.handleChange} placeholder="Name" />
        <input name="breed" onChange={this.handleChange} placeholder="Breed" />
        <input name="age" onChange={this.handleChange} placeholder="Age" />
        <input name="image" onChange={this.handleChange} placeholder="Image" />
        <textarea name="bio" onChange={this.handleChange} placeholder="Bio" />
        <button onClick={this.handleClick}>Add Dog!</button>
      </div>
    )
  }
}

export default NewDog;