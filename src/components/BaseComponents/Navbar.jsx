import { useContext, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router"; 
import { AuthContext } from "../../Provider/AuthProvider";
import { TiMessages } from "react-icons/ti";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Navbar = ({menuOpen, setMenuOpen}) => {
    const {user,signOutUser,verifyAccount} = useContext(AuthContext)
    const location = useLocation();
    const path = location.pathname;
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [path]); // Trigger when the route changes

    
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
                        <Link to="/" className="">Home</Link>
                        <Link to="/questions" className="">Questions</Link>
                        <Link to="/blogs" className="">Blogs</Link>
                        <div className="dropdown dropdown-end dropdown-hover">
                            <p tabIndex={0} className="m-1">More</p>
                            <ul tabIndex={0} className="bg-[#1f1f20] dropdown-content menu rounded-box z-[1] w-fit p-2 shadow [&_*]:text-nowrap">
                                <li><Link to="/about" className="">About Us</Link></li>
                                <li><Link to="/contact" className="">Contact Us</Link></li>
                            </ul>
                        </div>
                        
                        
                    </div>

                    {/* <Link to="/message"><TiMessages className="text-3xl"/></Link> */}

                    <div className="">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="dropdown dropdown-end dropdown-hover">
                                <div
                                tabIndex={0}
                                role="button"
                                className="indicator hover:shadow-xl"
                                >
                                <div className="w-11 aspect-square rounded-full overflow-hidden bg-white">
                                    <img
                                        alt="User Photo"
                                        className="place-self-start"
                                        src={
                                            user.photoURL
                                            ? `${user.photoURL}`
                                            : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        }
                                    />
                                </div>
                                {user.emailVerified && (
                                    <RiVerifiedBadgeFill className="text-sky-500 text-[16px] indicator-item top-2 right-0" />
                                )}
                                </div>
                                <div className="dropdown-content bg-[#1f1f20] rounded-box z-[1] min-w-52 p-2 shadow space-y-2">
                                <div className="space-y-1 text-center w-full">
                                    {user.displayName && (
                                    <div className="flex justify-center">
                                        <h5 className="font-bold">{user.displayName}</h5>
                                    </div>
                                    )}
                                    <p className="text-custom-primary font-bold">
                                        {user.email && user.email}
                                    </p>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm !list-none !space-y-1 !m-0"
                                >
                                    {user.emailVerified || (
                                    <li className="hover:scale-105 duration-200">
                                        <p
                                        onClick={verifyAccount}
                                        className="font-bold"
                                        >
                                        {" "}
                                        Verify now{" "}
                                        </p>
                                    </li>
                                    )}

                                    <li>
                                    <Link to={`/profile/${user.email}`} className="">
                                        Profile
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to={"/change-password"} className="">
                                        Change Password
                                    </Link>
                                    </li>
                                    <li className="hover:scale-105 duration-200 lg:hidden">
                                        <p onClick={signOutUser}>Sign out</p>
                                    </li>
                                </ul>
                                </div>
                            </div>

                            <button onClick={signOutUser} className="primaryButton hidden  lg:inline-block">
                                    Sign out
                            </button>

                            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
                                <IoMenu className="text-3xl text-white" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/sign-in" className="primaryButton">
                                Sign in
                            </Link>

                            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
                                <IoMenu className="text-3xl text-white" />
                            </button>
                        </div>
                    )}


                    </div>






                </div>

            </div>
        </section>
    );
};

export default Navbar;
