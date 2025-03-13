import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import NavMenuSidebar from './NavMenuSidebar';

const Base = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <NavMenuSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Outlet />
        <Footer />
        </>
    );
};

export default Base;