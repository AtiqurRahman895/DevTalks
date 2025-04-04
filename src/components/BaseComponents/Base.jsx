import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import NavMenuSidebar from './NavMenuSidebar';
import useGetUserRole from '../../Hooks/useGetUserRole'
import Eid_wish_List from './Eid_wish_List';

const Base = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useGetUserRole()
    return (
        <>
        <Eid_wish_List></Eid_wish_List>
        <NavMenuSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Outlet />
        <Footer />
        </>
    );
};

export default Base;