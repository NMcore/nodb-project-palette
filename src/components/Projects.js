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
            <div className="projects-des text-light d-flex p-2">
                
                <div class="col-md-6">
                <ul>
                    <li>Project Name: {this.props.projectInfo?.projectName}</li>
                    <li>Created By: {this.props.projectInfo?.createdBy}</li>
                    <li>Description: {this.props.projectInfo?.description}</li>
                    <li>Notes: {this.props.projectInfo?.notes}</li>
                    <li>End Date: {this.props.projectInfo?.endDate}</li>
                </ul>
                </div>
                <div class="col-md-6">
                {this.props.projectInfo?.color.map((color, i) => {
                    return (
                        <section key={i}>
                            <div className="project-colors-container" class="col-md-6">
                            <button 
                                onClick={ () => this.handleClick( color.name) }>
                                <span>{color.name}</span>
                                <span>{color.value}</span>
                            </button>
                            </div>
                        </section>
                    )
                })}

                </div>
            </div>
        )
    }
}
export default Projects;

