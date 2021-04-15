import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class Edit extends Component {
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

  handleClick = (index) => {
    const {
      projectName, createdBy, description
    } = this.state;

    axios
      .put(`/api/project/${index}`, { projectName, createdBy, description })
      .then((response) => {
        this.props.updateProjects(response.data);
      })
      .catch();
  }

  render() {
    const {index} = this.props;
    return (
      <div>
        <Form 
          handleChange={this.handleChange}
        />
        {/* <input name="projectName" onChange={this.handleChange} placeholder="Project Name" />
        <input name="createdBy" onChange={this.handleChange} placeholder="Created By" />
        <input name="description" onChange={this.handleChange} placeholder="Description" /> */}
        <button onClick={() => this.handleClick(index)}>Edit Project!</button>
      </div>
    )
  }
}

export default Edit;