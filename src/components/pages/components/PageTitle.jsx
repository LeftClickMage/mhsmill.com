import React from "react";
export default function PageTitle(props){
    return(

            <h1 className="display-1 fw-bold text-center titleText">{props.children}</h1>
    );
}