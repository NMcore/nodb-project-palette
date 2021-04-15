import React, { Component } from 'react'
import axios from 'axios';

class Projects extends Component {
    handleClick = (colorName) => {
        const { index } = this.props;
        axios
            .delete(`/api/color/${index}?removeColor=${colorName}`)
            .then((response) => {
                this.props.updateProjects(response.data);
            })
            .catch((e) => console.log(e));
    }    
    render() {
        return (
            <div className="projects-des">
                <ul>
                    <li>ID: {this.props.projectInfo?.id}</li>
                    <li>Project Name: {this.props.projectInfo?.projectName}</li>
                    <li>Created By: {this.props.projectInfo?.createdBy}</li>
                    <li>Description: {this.props.projectInfo?.description}</li>
                </ul>
                {this.props.projectInfo?.color.map((project, i) => {
                    return (
                        <section key={i}>
                            <div className="project-colors-container">
                            <button 
                                onClick={ () => this.handleClick( project.name) }>
                                <span>{project.name}</span>
                                <span>{project.value}</span>
                            </button>
                            </div>
                        </section>
                    )
                })}

            </div>

        )
    }
}
export default Projects;

