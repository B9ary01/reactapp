import React from "react";
import "./App.css";

function Singer(props){
	return(
	<div className="fangs">

<h3>{props.name}</h3>
<p>{props.info}</p>
<h4>6 Octave Singer</h4>


	</div>
	);
}

export default Singer;
