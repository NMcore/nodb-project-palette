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
            <div className="projects-des text-light d-flex w-100 pt-3 pb-3">
                <div className="flex-column w-50 pl-2">
                    <div className="d-flex">
                        <div className="fa fa-paint-brush mb-2"></div>
                        <div className="col-md-10">Project Name: {this.props.projectInfo?.projectName}</div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-address-book-o mb-2"></div>
                        <div className="col-md-10">Created By: {this.props.projectInfo?.createdBy}</div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-list-alt mb-2"></div>
                        <div className="col-md-10">Description: {this.props.projectInfo?.description}</div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-sticky-note-o mb-2"></div>
                        <div className="col-md-10">Notes: {this.props.projectInfo?.notes}</div>
                    </div>
                    <div className="d-flex pt-2">
                        <div className="fa fa-calendar mb-2"></div>
                        <div className="col-md-10">End Date: {this.props.projectInfo?.endDate}</div>
                    </div>                                                        
                </div>                
                <div class="w-50 grid-1">
                {this.props.projectInfo?.color.map((color, i) => {
                    return (
                        <div key={i} className="image-card w-25">
                                <div className="tile-card">
                                <div className="selected-box" style={{backgroundColor: color.value}}><span className="hide-extra">{color.name}</span></div>
                                    <div className="d-flex pt-2">
                                        <span onClick={ () => this.handleClick( color.name)  } class="fa fa-lock ml-1 text-light"></span> 
                                        <span class="ml-2  text-light">{color.value}</span>
                                    </div>
                                </div>
                        </div>         
                    )
                })}

                </div>
            </div>
        )
    }
}
export default Projects;

