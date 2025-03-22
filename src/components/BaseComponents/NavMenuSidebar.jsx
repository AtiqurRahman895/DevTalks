import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router';

const NavMenuSidebar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={`lg:hidden fixed inset-0 w-full h-full bg-black bg-opacity-90 z-[51] transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <RxCross2 className="text-3xl text-white" /> 
                </button>
                <Link to="/" className="text-2xl" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/questions" className="text-2xl" onClick={() => setMenuOpen(false)}>Questions</Link>
                <Link to="/about" className="text-2xl" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/contact" className="text-2xl" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                <Link to="/sign-in">
                    <button className="primaryButton" onClick={() => setMenuOpen(false)}>
                        Sign in
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NavMenuSidebar;