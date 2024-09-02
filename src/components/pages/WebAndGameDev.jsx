import { hot } from "react-hot-loader/root";
import React from "react";


function WebAndGameDev() {
    return (
        <>
            <h1 className="display-1 fw-bold text-center titleText">Web {"&&"} Game Dev</h1>

            <div className ="container mt-5">
                <div className = "row bg-light border border-5 border-dark p-4 backgroundGlow">
                    <div className = "col-md-6">
                        <h2 className = "display-6 fw-bold">Why learn Web Dev?</h2>
                        <p className = "ms-4 fs-5">Learning Web Dev in CSII allows you to create online websites like this one! You will learn HTML, CSS, and JS with no prior experience needed. Having your own website allows you to put whatever you want on it: your achievements, projects. favorite stuffed animals, or even this photo of a cat!</p>
                    </div>
                    <div className = "col-md-6 text-center">
                        <img src ="assets/cat.png" className ="img img-fluid border border-3 border-dark" />
                    </div>
                </div>
            </div>

            <div className ="container mt-5">
                <div className = "row bg-light border border-5 border-dark p-4 backgroundGlow">
                    <div className = "col-md-6">
                        <h2 className = "display-6 fw-bold">Why learn Game Dev?</h2>
                        <p className = "ms-4 fs-5">Learning Game Dev in CSII allows you to create online games that your friends and family can enjoy! You will enhance your knowledge in JavaScript by creating games using JS Frameworks like ThreeJS and PhaserJS.</p>
                    </div>
                    <div className = "col-md-6 text-center">
                        <img src ="assets/cubepvp.jpg" className ="img img-fluid border border-3 border-dark" />
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default hot(WebAndGameDev);
