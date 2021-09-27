
import React,{useState} from "react";
import Singer from "./Sing";
import "./App.css";

function Play(){

const sayHello=()=>{
	console.log("sos dimash songs !");
};

const[isRed, setRed]=useState(false);
const[count, setCount]=useState(0);

const[users,setUsers]=useState([
{name:"Sos", message:"I like 1 Chumaki"},
{name:"Opera", message:"I like to sing"},
{name:"Classic", message:"I play harmonium"}
	]);




const increment=()=>{
	setCount(count+2);
	//setRed(true);
	setRed(!isRed);
};
	return(

	<div className="player">
	{users.map(user => (
		<Singer name={user.name} message={user.message}/>
		))}
	
	

<h1 className={isRed ? 'red' : ""}>change the color</h1>
<button onClick={increment}>Increment</button>
<h1>{count}</h1>
	
	</div>

	);
}

export default Play;