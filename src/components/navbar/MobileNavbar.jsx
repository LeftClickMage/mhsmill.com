import React, { useState } from "react";
import "./css/mobileNav.css";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton.jsx";

function MobileNavbar() {
{/* Dont mind this, it works, prob not the prettiest */}
    const [openedNav, setOpenedNav] = useState(false);


    let openMobileNav = ()=>{
        var navContainer = document.getElementById('navContainer');
        var ham2 = document.getElementById('ham2');
        var ham3 = document.getElementById('ham3');
        var ham1 = document.getElementById('ham1');
        var ham4 = document.getElementById('ham4');
        var navPopup = document.getElementById('navPopup');
        var mobileNav = document.getElementById('mobileNav');
        mobileNav.setAttribute("style", "position:absolute;top:0;left:0;");
        navContainer.setAttribute("style","");
        navPopup.setAttribute("style","");
        if (openedNav){
            ham2.classList.add("rotate0");
            ham2.classList.remove("rotate45");
            ham3.classList.add("rotate-0");
            ham3.classList.remove("rotate-45");
            ham1.classList.add("opacity1");
            ham4.classList.add("opacity1");
            ham1.classList.remove("opacity0");
            ham4.classList.remove("opacity0");
            setOpenedNav(false);
            navContainer.classList.add("slideLeft");
            navContainer.classList.remove("slideRight");
            navPopup.classList.add("slideLeft");
            navPopup.classList.remove("slideRight"); 
        } else {
            ham2.classList.add("rotate45");
            ham2.classList.remove("rotate0");
            ham3.classList.add("rotate-45");
            ham3.classList.remove("rotate-0");
            ham1.classList.add("opacity0");
            ham4.classList.add("opacity0");
            ham1.classList.remove("opacity1");
            ham4.classList.remove("opacity1");
            setOpenedNav(true);
            navContainer.classList.add("slideRight");
            navContainer.classList.remove("slideLeft");
            navPopup.classList.remove("slideLeft");
            navPopup.classList.add("slideRight");
        }
    }
    return (
        <>
        
            <div id = "mobilePhone">
   
                <div id = "mobileNav" style={{top: 0, left: 0, position: "absolute"}} onClick={openMobileNav}>

                    <div id = "mobileImg">
                        <img src="assets/ham.png" id="ham1" className="ham"/>
                        <img src="assets/ham.png" id="ham2" className="ham"/>
                        <img src="assets/ham.png" id="ham3" className="ham"/>
                        <img src="assets/ham.png" id="ham4" className="ham"/>
                    </div>

                </div>

                <div id = "navPopup" style={{"margin-left": "-50vh"}}>
                </div>
                <div id ="navContainer"  style={{"margin-left": "-50vh"}}>
                <Link to="/">
                    <img src="assets/csiiLogo.png" id="csiiLogo" style={{height: "80px", "margin-left": "5px"}} />
                    </Link>
                    <br/>

                    <NavbarButton className="navButtons mobileNavbarButton" id = "aiNavButton" page = "Artifical Intelligence" to="/ai"/>
                    <br />
                <NavbarButton className="navButtons mobileNavbarButton" id = "idNavButton" page = "Innovative Development" to="/id"/>
                <br />
                <NavbarButton className="navButtons mobileNavbarButton" id = "ccNavButton" page = "Competitive Coding" to="/cc"/>
                <br />
                <NavbarButton className="navButtons mobileNavbarButton" id = "dsNavButton" page = "Data Science" to="/ds"/>
                <br />
                <NavbarButton className="navButtons mobileNavbarButton" id = "wgNavButton" page = "Web && Game Dev" to="/wgd"/>
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
