import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      createdBy: '',
      description: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const {
      projectName, createdBy, description
    } = this.state;

    axios
      .post('/api/project', { projectName, createdBy, description })
      .then((response) => {
        this.props.updateProjects(response.data);
        this.props.toEnd();
      })
      .catch();
  }

  render() {
    return (
      <div>
        <Form 
          handleChange={this.handleChange} 
          handleClick={this.handleClick}
          />
        <button onClick={this.handleClick}>Add Project!</button>
      </div>
    )
  }
}

export default Add;