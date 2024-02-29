import React, {Component} from 'react'
import toastr from 'cogo-toast';

class Create extends Component
{
	constructor() {
		super();
		//--- Declare state variable for this component ---//
		this.state = {
			errors    : [],
			EmpName  : '',
			Role_Maturity : '',
			Skill_Profile 	  : '',
			Bill_Rate: '',
			DB_Estimate: '',
			G_Level: ''
		}
		//--- Declare method for this component ---//
		this.baseState = this.state
		this.hasErrorFor = this.hasErrorFor.bind(this);
		this.renderErrorFor = this.renderErrorFor.bind(this);
		this.handleInsertUser = this.handleInsertUser.bind(this);
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
	}
	//--- Update state variable value while input field change ---//
	handleInputFieldChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	//--- Insert new user in users state array by props method ---//
	handleInsertUser(e) {
		e.preventDefault()
		const data = {
			id 		  : Math.floor(Math.random() * 100),
			EmpName  : this.state.EmpName,
			// mobile_no : this.state.mobile_no,
			// email     : this.state.email,
			Role_Maturity : this.Role_Maturity,
			Skill_Profile 	  :this.Skill_Profile ,
			Bill_Rate: this.Bill_Rate,
			DB_Estimate: this.DB_Estimate,
			G_Level: this.G_Level
		}
		if( !this.checkValidation(data) ) {
			this.reset();
			this.props.updateState(data, 0);
			document.getElementById("closeAddModal").click();
			toastr.success('New user added successfully!', {position : 'top-right', heading: 'Done'});
		}
	}
	//--- Validate all input field ---//
    checkValidation(fields) {
    	var error = {};
    	if(fields.EmpName.length === 0) {
    		error.EmpName = ['This field is required!'];
    	}
    	if(fields.Role_Maturity.length === 0) {
    		error.Role_Maturity = ['This field is required!'];
    	}
    	if(fields.Bill_Rate === 0) {
    		error.Bill_Rate = ['This field is required!'];
    	}

		if(fields.DB_Estimate === 0) {
    		error.DB_Estimate = ['This field is required!'];
    	}

		if(fields.G_Level === 0) {
    		error.G_Level = ['This field is required!'];
    	}

		this.setState({
			errors : error
		})
		if(fields.EmpName.length === 0 || fields.Role_Maturity.length === 0 || fields.DB_Estimate.length === 0 || fields.G_Level.length === 0) {
			return true;
		} else {
			return false;
		}
    }
    //--- Reset all state variable while insert new user ---//
    reset() {
        this.setState(this.baseState);
    }
    //--- Check that any validation errors occure for input field ---//
	hasErrorFor(fieldName) {
		return !!this.state.errors[fieldName];
	}
	//--- Render error for specific validation fail input field ---//
	renderErrorFor(fieldName) {
    	if (this.hasErrorFor(fieldName)) {
	        return (
	        	<em className="error invalid-feedback"> {this.state.errors[fieldName][0]} </em>
	        )
      	}
    }

    render() {
      return(
			<div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title">New user</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			        <form onSubmit={this.handleInsertUser}>
			      		<div className="modal-body">
			          		<div className="form-group">
			            		<label htmlFor="EmpName" className="col-form-label">Emp Name:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('EmpName') ? 'is-invalid' : ''}`}
			            		 id="EmpName" name="EmpName" placeholder="Emp Name" onChange={this.handleInputFieldChange} value={this.state.EmpName}/>
			            		{this.renderErrorFor('EmpName')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="Role_Maturity" className="col-form-label">Role_Maturity:</label>
			            		<input type="number" className={`form-control form-control-sm ${this.hasErrorFor('Role_Maturity') ? 'is-invalid' : ''}`}
			            		 id="Role_Maturity" name="Role_Maturity" placeholder="Role_Maturity" onChange={this.handleInputFieldChange} value={this.state.Role_Maturity}/>
			            		{this.renderErrorFor('Role_Maturity')}
			          		</div>
			          		<div className="form-group">
			            		<label htmlFor="email" className="col-form-label">Email:</label>
			            		<input type="email" className={`form-control form-control-sm ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
			            		 id="email" name="email" placeholder="Email" onChange={this.handleInputFieldChange} value={this.state.email}/>
			            		{this.renderErrorFor('email')}
			          		</div>
							  <div className="form-group">
			            		<label htmlFor="EmpName" className="col-form-label">Emp Name:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('EmpName') ? 'is-invalid' : ''}`}
			            		 id="EmpName" name="EmpName" placeholder="Emp Name" onChange={this.handleInputFieldChange} value={this.state.EmpName}/>
			            		{this.renderErrorFor('EmpName')}
			         	 	</div>
							  <div className="form-group">
			            		<label htmlFor="EmpName" className="col-form-label">Emp Name:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('EmpName') ? 'is-invalid' : ''}`}
			            		 id="EmpName" name="EmpName" placeholder="Emp Name" onChange={this.handleInputFieldChange} value={this.state.EmpName}/>
			            		{this.renderErrorFor('EmpName')}
			         	 	</div>
							
			      		</div>
			      		<div className="modal-footer">
			        		<button type="button" id="closeAddModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
			        		<button type="submit" className="btn btn-primary btn-sm">Save User</button>
			      		</div>
			   		</form>
			    	</div>
			  	</div>
			</div>
        )
    }
}
export default Create