import React, { Component } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Colors from './components/Colors';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      projects: [],
    }

  }

  toEnd = () => {
    const end = this.state.projects.length -1
    this.setState({ index: end });
  }

  moreHandle = () => {
    const moreValue = this.state.index + 1;
    if (this.state.index < this.state.projects.length - 1) {
      this.setState({ index: moreValue });
    }
  }

  lessHandle = () => {
    const lessValue = this.state.index - 1;
    if (this.state.index > 0) {
      this.setState({ index: lessValue });
    }
  }



  componentDidMount() {
    axios.get('/api/projects')
      .then((response) => {
        this.setState({ projects: response.data })
      })
      .catch((e) => console.log(e));

  }

  updateProjects = (projects) => {
    this.setState({ projects })
  }

  render() {
    
    return (
      <main>
        <header>
          <div className="header-logo">
            <h5><img width="100px" alt="erase me" src="https://www.finlandia.edu/wp-content/uploads/2016/05/THE-Project-Logo.jpg"></img></h5>
          </div>
          <div className="header-search-nav">

            <div className="header-search">
              <input className="header-search-input" />
              <button>Search</button>
            </div>

            <div className="header-nav">
              <nav>
                <a href="/">Add</a> |
                    <a href="/">Edit</a> |
                    <a href="/">Remove</a>
                <span className="header-project-total">Projects (0)</span>
              </nav>
            </div>

          </div>
        </header>

        <div className="container">
          <div className="projects-container">
            <button onClick={this.lessHandle}>Left</button>

            <Projects
              index={this.state.index}
              updateProjects={this.updateProjects}
              projectInfo={this.state.projects[this.state.index]}
            />

            <button onClick={this.moreHandle}>Right</button>
          </div>

          <div className="project-pal-nav">
            <div className="project-color-button">
              <button onClick={this.getColors}>Get Colors</button>
            </div>

            <div className="project-dropdown">FF Update</div>

          </div>

          <div className="palette-color-container">

            <Colors
              index={this.state.index}
              colors={this.state.colors}
              updateProjects={this.updateProjects}
            />

          </div>
        </div>

        <Add 
        toEnd={this.toEnd}
        updateProjects={this.updateProjects} />
        <Edit
          index={this.state.index}
          updateProjects={this.updateProjects} />
        <Delete
          index={this.state.index}
          updateProjects={this.updateProjects} />
      </main>
    )
  }
}

export default App;
