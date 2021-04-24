import React, { Component } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Colors from './components/Colors';
import Projects from './components/Projects';
import Template from './components/Template';
import './App.css';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


//DND
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  margin: `0 ${grid}px 0 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});
//DND OFF

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      projects: [],
      templateColor: [],
      fontLightDark: true,
      templateTextColor: ["#66615B"],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  fontLightDark = () => {
    this.setState(prevState => ({
      fontLightDark: !prevState.fontLightDark
    }));
    if (this.state.fontLightDark === true) {
      this.setState({ templateTextColor: ["#ffffff"] })
    } else {
      this.setState({ templateTextColor: ["#66615B"] })
    }
  }

  templateColor = (hex, i) => {
    const newColors = [...this.state.templateColor];
    newColors.push({color: hex, id: i});
    this.setState({ templateColor: newColors})
  }

  clearTemplateColor = () => {
    this.setState({ templateColor: [] })

  }

  toEnd = () => {
    const end = this.state.projects.length - 1
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

  //DND
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.templateColor,
      result.source.index,
      result.destination.index
    );


    
    this.setState({ templateColor: items})

  }
  //DND

  render() {
    return (
      <main>
        <header className="navbar">
          <div className="container">
            <div className="header-logo">
              <i className="nc-icon nc-palette mr-2 text-success palette-logo"></i>Poject Palette
            </div>
            <div>
              <nav className="header-nav">
                <ul className="navMenu">
                  <li className="navLinks"><Add
                    toEnd={this.toEnd}
                    updateProjects={this.updateProjects} />
                  </li>
                  <li className="navLinks"><Edit
                    projectInfo={this.state.projects[this.state.index]}
                    index={this.state.index}
                    updateProjects={this.updateProjects} />
                  </li>
                  <li className="navLinks"><Delete
                    projectInfo={this.state.projects[this.state.index]}
                    index={this.state.index}
                    updateProjects={this.updateProjects} />
                  </li>
                  <li className="navLinks sub"><i className="nc-icon nc-bulb-63 mr-2 text-white"></i>Projects(<span className="text-info">{this.state.projects.length}</span>)</li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <section className="container">
          <div className="projects-container w-100">
            <button onClick={this.lessHandle} className="project-button">
              <svg fill="#c3c3c3" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
            </button>
            <Projects
              index={this.state.index}
              updateProjects={this.updateProjects}
              projectInfo={this.state.projects[this.state.index]}
            />
            <button onClick={this.moreHandle} className="project-button">
              <svg fill="#c3c3c3" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" /></svg>
            </button>
          </div>
        </section>
        <div className="container colors-sticky mb-3">
          <Colors
            fontLightDark={this.fontLightDark}
            clearTemplateColor={this.clearTemplateColor}
            templateColor={this.templateColor}
            index={this.state.index}
            colors={this.state.colors}
            updateProjects={this.updateProjects}
          />
        </div>
          {/* Last feature add */}
          <DragDropContext onDragEnd={this.onDragEnd}>
                  <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                      <div 
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                      >
                        {this.state.templateColor.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                              <div className="colorChanger mr-1"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                <i class="fa fa-circle ml-1 mr-1" style={{color: item.color}}></i>{item.color}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
          {/* New feature add */}

        <Template
          templateColor={this.state.templateColor}
          templateTextColor={this.state.templateTextColor}
        />
      </main>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
