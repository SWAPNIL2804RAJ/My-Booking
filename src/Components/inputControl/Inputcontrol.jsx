import React from "react";

import "./inputcontrol.css";

function Inputcontrol(props){
    return(
        <div className="container">
            {props.label && <label >{props.label}</label>}
            <input type={props.type} {...props} required/>
        </div>
    );
}

export default Inputcontrol;    