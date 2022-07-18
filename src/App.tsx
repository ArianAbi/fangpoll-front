import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Typography, Box, Button, Divider } from '@mui/material/';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import './main.css';


const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App