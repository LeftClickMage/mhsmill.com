import React from "react";

function Index() {
    return (
        <>
            <div className="container-fluid text-center" style={{"bottom": "5vh", "position": "fixed"}}>
                <button className="navButtons fs-4 mx-2" onClick={()=>{window.open("https://discord.gg/Y7AQuPY3Bn")}}>Discord</button>
                <button className="navButtons fs-4 mx-2" onClick = {()=>{window.open("https://classroom.google.com/c/NTQ1MjM4MDcwOTkx?cjc=rnna45z")}}>Google Classroom</button>
            </div>
        </>
    );
}
 
export default Index;
 