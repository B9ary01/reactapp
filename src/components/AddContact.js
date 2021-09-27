import React from "react";

class AddContact extends React.Component{
	render(){
		return(
			<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form">
			<div className="field">

			<label>Name</label>
			<input type="text" name="name" placeholder="enter your name"/>
			</div>

			<div className="field">

			<label>Address</label>
			<input type="text" name="address" placeholder="enter your address"/>
			</div>
			<button className="ui button blue">Add</button>


			</form>
			</div>


			);
	}



}	export default AddContact;