import React from "react";
import "./App.css"
const ListItem=(props)=>{
    return(
        <>
            <div className="list-Comp">
            <button onClick={()=>{props.delFunction(props.id)}}>X</button>
            <li>{props.text}</li>
            </div>
        </>
    );
}
export default ListItem;