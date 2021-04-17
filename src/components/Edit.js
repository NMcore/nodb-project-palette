import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Edit extends Component {
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

  handleClick = (index) => {
    const {
      projectName, createdBy, description, notes, endDate
    } = this.state;

    axios
      .put(`/api/project/${index}`, { projectName, createdBy, description, notes, endDate })
      .then((response) => {
        this.props.updateProjects(response.data);
      })
      .catch();
  }

  render() {
    const {index} = this.props;
    return (
      <div>
      <Popup
            trigger={<a className="top-menu-links"><i class="nc-icon nc-scissors mr-2 text-warning"></i>Edit</a>}
            modal
            nested
        >
        {close => (
            <div className="modalnav">
                <button className="closenav" onClick={close}>
                    &times;
                </button>
                <div className="headernav"> Edit New Project ( {this.props.projectInfo?.projectName} )</div>
                <div className="contentnav">
                  <Form 
                  projectInfo={this.props.projectInfo}
                  handleChange={this.handleChange} 
                  handleClick={this.handleClick}
                  />
                </div>
                <div className="actionsnav">
                    <button className="btn btn-warning mr-2"
                    onClick={() => { this.handleClick(index); close()}}>Edit Project!</button> 
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

export default Edit;