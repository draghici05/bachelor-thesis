import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import { Container } from "react-dom";
import Home from "./pages/HomePage/HomePage"
// import Navbar from "./components/Navbar"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)