import React from "react";

class AddContact extends React.Component{
	state={
		name:"",
		address:""
	}
	add=(e)=>{
		e.preventDefault();
		if(this.state.name==="" && this.state.address===""){
			alert("All fields are required! ");
			return
		}
		this.props.addContactHandler(this.state);
		this.setState({name:"",address:""});
	}
	render(){
		return(
			<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form" onSubmit={this.add}>
			<div className="field">

			<label>Name</label>
			<input type="text" name="name" placeholder="enter your name" 
value={this.state.name}
			onChange={(e)=>this.setState({name:e.target.value})}/>
			</div>

			<div className="field">

			<label>Address</label>
			<input type="text" name="address" placeholder="enter your address" 
value={this.state.address}
			onChange={(e)=>this.setState({address:e.target.value})}/>
			</div>
			<button className="ui button blue">Add</button>


			</form>
			</div>


			);
	}



}	export default AddContact;