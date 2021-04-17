import React from 'react'

export default function Form(props) {
    return (
        <div className="d-flex justify-content-start flex-column form-group">
                <div className="text-left mt-3 mb-2"><span class="fa fa-paint-brush  mb-2 ml-2 mr-3" id="fa-2"></span>Project Name:</div>
                
                    <input className="mr-1 form-control" name="projectName" onChange={props.handleChange} defaultValue={props.projectInfo?.projectName} />
                <div className="text-left mt-3 mb-2"><span class="fa fa-address-book-o mb-2 ml-2 mr-3" id="fa-2"></span>Created By:</div>
                    <input className="mr-1 form-control" name="createdBy" onChange={props.handleChange} defaultValue={props.projectInfo?.createdBy} />
                <div className="text-left mt-3 mb-2"><span class="fa fa-list-alt mb-2 ml-2 mr-3" id="fa-2"></span>Description:</div>
                    <textarea className="mr-1 form-control" name="description" onChange={props.handleChange} defaultValue={props.projectInfo?.description}  />     
                <div class="row text-left mt-3">
                    <div class="col-md-6 mr-1"> 
                        <div class="form-group">
                                <label class="form-control-placeholder">Notes:</label> 
                                <span class="fa fa-sticky-note-o mb-2 ml-2 mr-3"></span> 
                                <input class="form-control" name="notes" onChange={props.handleChange} defaultValue={props.projectInfo?.notes}/> 
                        </div>
                    </div>
                    <div class="col-md-5"> 
                        <div class="form-group">
                                <label class="form-control-placeholder">End Date:</label> 
                                <span class="fa fa-calendar  mb-2 ml-2 mr-3" id="fa-2"></span>
                                <input placeholder='dd-mm-yyyy' class="form-control" name="endDate" onChange={props.handleChange} defaultValue={props.projectInfo?.endDate}/> 
                        </div>
                    </div>
                </div>

                       
        </div>
    )
}