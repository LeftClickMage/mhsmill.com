import React from "react";
import { Link } from "react-router-dom";

export default function NavbarButton(props) {
    return (
        <>
            <Link to={props.to}>
                <button className={props.className} id={props.id}>
                    <span className="navbarTextColor">{props.page}</span>
                </button> 
            </Link>
        </>
    );
}

