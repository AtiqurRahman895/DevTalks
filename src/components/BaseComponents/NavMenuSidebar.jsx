import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const NavMenuSidebar = ({menuOpen, setMenuOpen}) => {
    const {user,signOutUser} = useContext(AuthContext)
    const handleSignOutButton = ()=>{
        setMenuOpen(false)
        signOutUser()
    }
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
                {
                    user?
                    <button onClick={handleSignOutButton} className="primaryButton">
                        Sign out
                    </button>
                    :
                    <Link onClick={() => setMenuOpen(false)} to="/sign-in" className="primaryButton">
                        Sign in
                    </Link>
                }

            </div>
        </div>
    );
};

export default NavMenuSidebar;