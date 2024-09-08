import React from "react";
import "./css/pcNav.css";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton.jsx";

function PCNavbar() {
    
    return (
        <nav id = "navBar" className="navbar navbar-expand-sm navbar-dark position-absolute w-100 overflow-hidden text-wrap" style={{top: 0, left: 0, position: "absolute"}}>
            <div className="container-fluid">
                <Link to="/">
                    <img src="assets/csiiLogo.png" id="csiiLogo" style={{height: "60px"}} />
                </Link>
                <NavbarButton className="navButtons navbar-text px-3" id = "aiNavButton" page = "Artifical Intelligence" to="/ai"/>
                <NavbarButton className="navButtons navbar-text px-3" id = "vcNavButton" page = "Version Control" to="/vc"/>
                <NavbarButton className="navButtons navbar-text px-3" id = "3dpNavButton" page = "3D Printing" to="/3dp"/>
                <NavbarButton className="navButtons navbar-text px-3" id = "aieNavButton" page = "AI Ethics" to="/aie"/>
                <NavbarButton className="navButtons navbar-text px-3 me-lg-5" id = "wgNavButton" page = "Web && Game Dev" to="/wgd"/>
            </div>
        </nav>
    );
}

export default PCNavbar;
