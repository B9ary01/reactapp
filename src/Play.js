import React from "react";
import Singer from "./Sing";
import "./App.css";

function Play(){

const sayHello=()=>{
	console.log("sos dimash songs !");
};


	return(

	<div className="player">
	<Singer name=" SOS" info="A good song"/>
	<Singer name="STRANGERS" info="awesome!"/>
	<Singer name="Daybreak" info="amazing"/>
	<Singer name="Tired swans" info="excellent!"/>

	

	<h1>hello players</h1>
	<button onClick={sayHello}>Hello</button>
	<h1></h1>
	

	
	</div>

	);
}

export default Play;