import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import NavMenuSidebar from './NavMenuSidebar';
import useGetUserRole from '../../Hooks/useGetUserRole'
import Eid_wish_List from './Eid_wish_List';
import useTrackTraffic from '../../Hooks/useTrackTraffic';

const Base = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useGetUserRole()
    const trackTraffic = useTrackTraffic()
    const location = useLocation();
    const path = location.pathname;
  
    useEffect(() => {
        trackTraffic()
    }, [path]); // Trigger when the route changes
    
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