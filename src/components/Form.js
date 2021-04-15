import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <input name="projectName" onChange={this.props.handleChange} placeholder="Project Name" />
                <input name="createdBy" onChange={this.props.handleChange} placeholder="Created By" />
                <input name="description" onChange={this.props.handleChange} placeholder="Description" />
            </div>
            
        )
    }
}
