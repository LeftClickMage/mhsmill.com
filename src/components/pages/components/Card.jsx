import React from "react";

export default function Card(props){
    return(

            <div className ="container mt-5">

                <div className = "row bg-light border border-5 border-dark p-4 backgroundGlow">

                    {props.children}

                </div>
                </div>
    );
}