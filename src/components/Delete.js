import React, { Component } from 'react';
import axios from 'axios';

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
    const {index} = this.props;
    return (
      <div>
        <button onClick={() => this.handleClick(index)}>Delete Project!</button>
      </div>
    )
  }
}

export default Delete;


