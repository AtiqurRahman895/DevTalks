import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <div className='flex justify-between md:hidden blurNavbar container py-4 items-center'>
                <div>
                    <h4>DevTalks</h4>
                </div>
                <div>

                    <button onClick={toggleSidebar}>
                        
                        {
                            isOpen ?   <FaTimes size={24} />:<FaBars size={24} />
                        }
                    </button>
                </div>
            </div>

            <div className="flex min-h-screen">



                {/* Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 z-50 w-64   blurNavbar text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                        <button className="md:hidden" onClick={toggleSidebar}>
                            <FaTimes size={24} />
                        </button>
                    </div>



                    {/* Sidebar Content */}
                    <nav className="py-4">
                        <ul className="space-y-2">
                            <li className='list-none'>
                                <Link

                                    className="flex items-center rounded-lg px-4 py-2 hover:bg-custom-primary transition-colors"
                                >
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link

                                    className="flex items-center rounded-lg px-4 py-2 hover:bg-custom-primary transition-colors"
                                >
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link

                                    className="flex items-center rounded-lg px-4 py-2 hover:bg-custom-primary transition-colors"
                                >
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link

                                    className="flex items-center rounded-lg px-4 py-2 hover:bg-custom-primary transition-colors"
                                >
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Hamburger Menu Button */}


                    {/* Overlay for mobile when sidebar is open */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={toggleSidebar}
                        ></div>
                    )}

                    {/* Main content area */}
                    <div className="p-4 md:ml-4">
                        <h1 className="text-2xl font-bold">Main Content</h1>
                        <p>Your content goes here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;