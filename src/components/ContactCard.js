import React from "react";
import user from "../image/ch.jpg";

const ContactCard=(props)=>{

	const{id,name,address}=props.contact;
  return (
        
    
        <div className="item">
        <img className="ui avatar image" src={user} alt="user image"/>
        <div className="content">
        <div className="header">{name}</div>
        <div>{address}</div>
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red"}}></i>
        
        </div>

  	);

}; 

export default ContactCard;