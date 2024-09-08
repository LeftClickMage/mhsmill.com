import React from "react";
export default function CardLeft(props) {
    return (
        <>
        <div className = "col-lg-6 text-center">
                        <img src ={props.imgURL} className ="img img-fluid border border-3 border-dark" />
                    </div>
<div className = "col-lg-6">
                        <h2 className = "display-6 fw-bold ms-3">{props.title}</h2>
                        <p className = "ms-lg-5 fs-5">{props.content}</p>
                    </div>
                    
        </>
    );
}







