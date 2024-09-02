import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./components/pages/css/index.css";
import { Index, WebAndGameDev, DataScience, InnovativeDevelopment, CompetitiveCoding, ArtificialIntelligence } from './components/pages/';

function App() {

    return(
        <>
            <BrowserRouter>
                <Navbar />
                <Routes> 
                    <Route index element = {<Index />} />
                    <Route path="/webandgamedev" element = {<WebAndGameDev />} />
                    <Route path="/competitivecoding" element = {<CompetitiveCoding />} />
                    <Route path="/artificialintelligence" element = {<ArtificialIntelligence />} />
                    <Route path="/innovativedevelopment" element = {<InnovativeDevelopment />} />
                    <Route path="/datascience" element = {<DataScience />} />
                </Routes>
            </BrowserRouter> 
        </>
    );
}

export default App; 