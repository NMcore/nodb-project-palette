import React, { Component } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Colors from './components/Colors';
import Projects from './components/Projects';
import Template from './components/Template';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      projects: [],
      templateColor: [],
      templateTextColor: ["#66615B",],
    }

  }

  templateColor = (hex) => {
    const newColors = [...this.state.templateColor];
    newColors.push(hex);
    this.setState({templateColor: newColors})
    
  }

  clearTemplateColor = () => {
    console.log('happy')
    this.setState({templateColor: []})
    
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
        <header className="navbar">
          <div className="container">
          <div className="header-logo">
          <i class="nc-icon nc-palette mr-2 text-success palette-logo"></i>Poject Palette
          </div>
          <div>
                <nav className="header-nav">
                    <ul className="navMenu">
                      <li class="navLinks"><Add 
                            toEnd={this.toEnd} 
                            updateProjects={this.updateProjects} />
                      </li>
                      <li class="navLinks"><Edit 
                        projectInfo={this.state.projects[this.state.index]} 
                        index={this.state.index} 
                        updateProjects={this.updateProjects} />
                      </li>
                      <li class="navLinks">
                      <Delete
                        projectInfo={this.state.projects[this.state.index]}
                        index={this.state.index}
                        updateProjects={this.updateProjects} />          
                      </li>
                        <li class="navLinks sub"><i class="nc-icon nc-bulb-63 mr-2 text-light"></i>Projects (<span className="text-info">{this.state.projects.length}</span>)</li>
                    </ul>

                </nav>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="projects-container">
            
                <button onClick={this.lessHandle} className="project-button">
                    <svg fill="#c3c3c3" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>
                </button>
                <Projects
                  index={this.state.index}
                  updateProjects={this.updateProjects}
                  projectInfo={this.state.projects[this.state.index]}
                />
                <button onClick={this.moreHandle} className="project-button">
                <svg fill="#c3c3c3" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
                </button>

          </div>
        </div>
          <div className="container colors-sticky ">
            
              <Colors
                clearTemplateColor={this.clearTemplateColor}
                templateColor={this.templateColor}
                index={this.state.index}
                colors={this.state.colors}
                updateProjects={this.updateProjects}
              />
          </div>
        

          <Template
              templateColor={this.state.templateColor}
              templateTextColor={this.state.templateTextColor}
             />
      </main>
    )
  }
}

export default App;
