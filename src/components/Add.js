import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      createdBy: '',
      description: '',
      notes: '',
      endDate: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const {
      projectName, createdBy, description, notes, endDate
    } = this.state;

    axios
      .post('/api/project', { projectName, createdBy, description, notes, endDate })
      .then((response) => {
        this.props.updateProjects(response.data);
        this.props.toEnd();
      })
      .catch();
  }

  render() {
    return (
      <div>
      <Popup
            trigger={<a className="top-menu-links"><i class="nc-icon nc-simple-add mr-2 text-success"></i>Add</a>}
            modal
            nested
        >
        {close => (
            <div className="modalnav">
                <button className="closenav" onClick={close}>
                    &times;
                </button>
                <div className="headernav"> Add New Project </div>
                <div className="contentnav">
                  <Form 
                  handleChange={this.handleChange} 
                  handleClick={this.handleClick}
                  />
                </div>
                <div className="actionsnav">
                    <button className="btn btn-success mr-2"
                    onClick={() => { this.handleClick(); close()}}>Add Project!</button> 
                    <button
                        className="btn btn-light mr-1" onClick={() => {close()}}>
                        Cancel
                </button>
                </div>
            </div>
        )}
      </Popup>
      </div>
    )
  }
}

export default Add;