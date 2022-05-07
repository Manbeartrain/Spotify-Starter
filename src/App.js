import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album" element={<Album />} />
            </Routes>
        </>
    )
};

export default App;
