import React from "react" ;
import Gheader from "./components/goals/g_header";
import { BrowserRouter as Switch, Route, BrowserRouter, Router, Routes } from "react-router-dom";

function Roots () {
    return (
        <div>
            <BrowserRouter>
            <Router>
                <Routes>
                   
                    <Route path="/dashboard" element={<Gheader />} />
                    
                    
                </Routes>
            </Router>
            </BrowserRouter>
        </div>
    );
}

export default Roots;