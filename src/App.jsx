import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./components/pages/css/index.css";
import { Index, WebAndGameDev, ThreeDPrinting, ArtificialIntelligenceEthics, VersionControl, ArtificialIntelligence } from './components/pages/';

export default function App() {

    return(
        <>
            <BrowserRouter>
                <Navbar />
                <Routes> 
                    <Route index element = {<Index />} />
                    <Route path="/wgd" element = {<WebAndGameDev />} />
                    <Route path="/aie" element = {<ArtificialIntelligenceEthics />} />
                    <Route path="/ai" element = {<ArtificialIntelligence />} />
                    <Route path="/vc" element = {<VersionControl />} />
                    <Route path="/3dp" element = {<ThreeDPrinting />} />
                </Routes>
            </BrowserRouter> 
        </>
    );
}

