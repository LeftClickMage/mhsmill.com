import React from "react";
export default function CardRight(props) {
    return (
        <>
<div className = "col-lg-6">
                        <h2 className = "display-6 fw-bold">{props.title}</h2>
                        <p className = "ms-4 fs-5">{props.content}</p>
                    </div>
                    <div className = "col-lg-6 text-center">
                        <img src ={props.imgURL} className ="img img-fluid border border-3 border-dark" />
                    </div>
        </>
    );
}







