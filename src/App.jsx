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
                    <Route path="/wgd" element = {<WebAndGameDev />} />
                    <Route path="/cc" element = {<CompetitiveCoding />} />
                    <Route path="/ai" element = {<ArtificialIntelligence />} />
                    <Route path="/id" element = {<InnovativeDevelopment />} />
                    <Route path="/ds" element = {<DataScience />} />
                </Routes>
            </BrowserRouter> 
        </>
    );
}

export default App; 