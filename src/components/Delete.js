import React, { Component } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Delete extends Component {

  handleClick = (index) => {
    axios
      .delete(`/api/project/${index}`)
      .then((response) => {
        this.props.updateProjects(response.data);
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { index } = this.props;
    return (
      <div>
        <Popup
          trigger={<button className="top-menu-links"><i className="nc-icon nc-simple-remove mr-2 text-danger"></i>Delete</button>}
          modal
          nested>
          {close => (
            <div className="modalnav bg-light">
              <button className="closenav" onClick={close}>&times;</button>
              <div className="headernav">Are you sure you want to delete?</div>
              <div className="contentnav">
                {this.props.projectInfo?.projectName}
              </div>
              <div className="actionsnav">
                <button className="btn btn-danger mr-2" onClick={() => { this.handleClick(index); close() }}>Yes Delete</button>
                <button className="btn btn-light" onClick={() => { close() }}>Cancel</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Delete;


