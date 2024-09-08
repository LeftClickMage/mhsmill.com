import React from "react";
export default function Spacer(props){
    return(
        <div className = {`my-${props.distance}`}></div>
    );
}