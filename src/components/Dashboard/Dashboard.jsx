import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import PageTitle from '../CommonComponents/PageTitle';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className=''>
            {/* mobile navbar  */}
            <PageTitle title={`Dashboard`}/>

            <section className='sticky top-0 z-50 mx-4 pt-3'>
                <div className="flex justify-between md:hidden blurNavbar py-4 px-6 items-center rounded-full">
                        <Link to="/">
                            <h4 className="font-fugaz">DevTalks</h4>
                        </Link>
                    <div>

                        <button onClick={toggleSidebar}>
                            {
                                isOpen ? <FaTimes size={24} /> : <FaBars size={24} />
                            }
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen">



                {/* Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 z-50 w-64 blurNavbar text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <Link to="/">
                            <h4 className="font-fugaz">DevTalks</h4>
                        </Link>
                        <button className="md:hidden" onClick={toggleSidebar}>
                            <FaTimes size={24} />
                        </button>
                    </div>



                    {/* sidebar menu*/}
                    <nav className="py-4">
                        <div className="flex flex-col">

                                <NavLink
                                    to={'/'}
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Home</span>
                                </NavLink>

                                <NavLink
                                    to={'/questions'}
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Questions</span>
                                </NavLink>

                                <NavLink
                                    to={'/blogs'}
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Blogs</span>
                                </NavLink>

                                <NavLink
                                    to="/quiz"
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Quiz</span>
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>About us</span>
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Contact us</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard"
                                    className="rounded-l-full px-4 py-2 hover:bg-custom-half-primary"
                                >
                                    <span>Dashboard</span>
                                </NavLink>

                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-x-hidden">
                    {/* Overlay for mobile when sidebar is open */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={toggleSidebar}
                        ></div>
                    )}

                    {/* Main content */}
                    <div className="p-4 md:ml-4">
                         <Outlet />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;