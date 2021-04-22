import React, { Component } from 'react'
import axios from 'axios';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: this.props.projectInfo?.color.name,
        };
        // this.onDragEnd = this.onDragEnd.bind(this);
      }    
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
            <div className="project-min-width">
            <div className="projects-des text-light d-flex w-100 pt-3 pb-3">
                <div className="flex-row w-50 ml-2">
                    <div className="d-flex">
                        <div className="fa fa-paint-brush mb-2"></div>
                        <div className="col-md-10 text-warning">Project Name: <span className="text-info">{this.props.projectInfo?.projectName}</span></div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-address-book-o mb-2"></div>
                        <div className="col-md-10 text-warning">Created By: <span className="text-info">{this.props.projectInfo?.createdBy}</span></div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-list-alt mb-2"></div>
                        <div className="col-md-10 text-warning">Description: <span className="text-info">{this.props.projectInfo?.description}</span></div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-sticky-note-o mb-2"></div>
                        <div className="col-md-10 text-warning">Notes: <span className="text-info">{this.props.projectInfo?.notes}</span></div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-calendar mb-2"></div>
                        <div className="col-md-10 text-warning">End Date: <span className="text-info">{this.props.projectInfo?.endDate}</span></div>
                    </div>
                </div>
                <div className="w-50 grid-1 d-flex-color">
                    {this.props.projectInfo?.color.map((color, i) => {
                        return (
                            <div key={i} className="image-card">
                                <div className="selected-box" style={{ backgroundColor: color.value }}><span className="hide-extra">{color.name}</span></div>
                                <div className="d-flex pt-2">
                                    <span onClick={() => this.handleClick(color.name)} className="fa fa-lock ml-1 text-light"></span>
                                    <span className="ml-2 text-light c-height">{color.value}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        )
    }
}
export default Projects;

