import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import Home from '../components/Home';
import NavBars from '../components/NavBars';


const DashboardRoute = () => {
    return (
        <div>
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
        </div>
    );
};

export default DashboardRoute;