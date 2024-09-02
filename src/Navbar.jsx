import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import MobileNavbar from "./components/navbar/MobileNavbar.jsx";
import PCNavbar from "./components/navbar/PCNavbar.jsx";

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        let navbarChanging = () =>{
            setIsMobile(window.innerWidth < 1000);
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

export default hot(Navbar); 