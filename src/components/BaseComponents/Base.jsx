import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

const Base = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
        </>
    );
};

export default Base;