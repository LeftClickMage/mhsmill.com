import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    
    <App />

, document.getElementById("root"));

// module.hot.accept();

function loop(){
    var navbarButtons = document.querySelectorAll(".navButtons");
    for(let button of navbarButtons){
        button.style.backgroundColor = "#1079d9";
    }
    switch (window.location.pathname){
        case "/vc":
            document.getElementById("vcNavButton").style.backgroundColor = "#0a4d8a";
            break;
        case "/wgd":
            document.getElementById("wgNavButton").style.backgroundColor = "#0a4d8a";
            break;
        case "/ai":
            document.getElementById("aiNavButton").style.backgroundColor = "#0a4d8a";
            break;
        case "/aie":
            document.getElementById("aieNavButton").style.backgroundColor = "#0a4d8a";
            break;
        case "/3dp":
            document.getElementById("3dpNavButton").style.backgroundColor = "#0a4d8a";
            break;
    }

    
    // alert("test");
    requestAnimationFrame(loop);

}
loop();