import React from "react";

const ContactCard=(props)=>{

	const{id,name,address}=props.contact;
  return (
        
    
        <div className="item">
        <div className="content">
        <div className="header">{name}</div>
        <div>{address}</div>
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red",marginTop:"7px"}}></i>
        </div>

  	);

}; 

export default ContactCard;