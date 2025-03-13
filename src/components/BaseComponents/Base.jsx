import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Base = () => {
    return (
        <>
        <Outlet />
        <Footer></Footer>
        </>
    );
};

export default Base;