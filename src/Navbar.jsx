import React, { useState, useEffect } from "react";
import MobileNavbar from "./components/navbar/MobileNavbar.jsx";
import PCNavbar from "./components/navbar/PCNavbar.jsx";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        let navbarChanging = () =>{
            setIsMobile(window.innerWidth < 900);
        }
        window.addEventListener("resize", navbarChanging);
        return () => {
            window.removeEventListener("resize", navbarChanging);
        };
    }, []);
  
    return (
        <>
            {
                isMobile? 
                    <MobileNavbar/> 
                :
                    <PCNavbar/>
            }
            <div style={{"margin-bottom": "130px"}}></div>
            
        </>
    );
}

