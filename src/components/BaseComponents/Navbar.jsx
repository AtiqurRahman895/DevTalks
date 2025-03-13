import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router"; // FIXED import

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <section className="sticky top-0 z-50 w-full pt-3">
            <div className="container blurNavbar px-6 rounded-full">
                <div className="flex justify-between items-center py-4">


                    <div>
                        <Link to="/">
                            <h4 className="font-fugaz">DevTalks</h4>
                        </Link>
                    </div>


                    <div className="hidden lg:flex items-center space-x-6">
                        <Link to="/" className="text-white  font-semibold">Home</Link>
                        <Link to="/questions" className="text-white  font-semibold">Questions</Link>
                        <Link to="/about" className="text-white  font-semibold">About Us</Link>
                        <Link to="/contact" className="text-white   font-semibold">Contact Us</Link>
                    </div>


                    <div className="hidden lg:flex">
                        <Link to="/login">
                            <button className="primaryButton">
                                Login
                            </button>
                        </Link>
                    </div>


                    <div className="lg:hidden">
                        <button onClick={() => setMenu(!menu)}>
                            {menu ? <RxCross2 className="text-3xl text-white" /> : <IoMenu className="text-3xl text-white" />}
                        </button>
                    </div>
                </div>


                <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transform ${menu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <button onClick={() => setMenu(!menu)}>
                            {menu ? <RxCross2 className="text-3xl text-white" /> : <IoMenu className="text-3xl text-white" />}
                        </button>
                        <Link to="/" className="text-white text-2xl" onClick={() => setMenu(false)}>Home</Link>
                        <Link to="/questions" className="text-white text-2xl" onClick={() => setMenu(false)}>Questions</Link>
                        <Link to="/about" className="text-white text-2xl" onClick={() => setMenu(false)}>About Us</Link>
                        <Link to="/contact" className="text-white text-2xl" onClick={() => setMenu(false)}>Contact Us</Link>
                        <Link to="/login">
                            <button className="primaryButton" onClick={() => setMenu(false)}>
                                Login
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
