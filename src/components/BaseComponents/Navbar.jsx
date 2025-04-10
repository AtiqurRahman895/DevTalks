import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router"; 
import { AuthContext } from "../../Provider/AuthProvider";
import { TiMessages } from "react-icons/ti";

const Navbar = ({menuOpen, setMenuOpen}) => {
    const {user,signOutUser} = useContext(AuthContext)
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
                        <Link to="/quiz" className="">Quiz's</Link>
                        <div className="dropdown dropdown-end dropdown-hover">
                            <p tabIndex={0} className="m-1">More</p>
                            <ul tabIndex={0} className="bg-[#1f1f20] dropdown-content menu rounded-box z-[1] w-fit p-2 shadow [&_*]:text-nowrap">
                                <li><Link to="/about" className="">About Us</Link></li>
                                <li><Link to="/contact" className="">Contact Us</Link></li>
                            </ul>
                        </div>
                        
                        
                    </div>


                    <div className="hidden lg:flex lg:items-center gap-5">
                        <Link to="/message"><TiMessages className="text-3xl"/></Link>
                        {
                            user?
                            <button onClick={()=>signOutUser()} className="primaryButton">
                                Sign out
                            </button>
                            :
                            <Link to="/sign-in" className="primaryButton">
                                Sign in
                            </Link>
                        }
                    </div>


                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <IoMenu className="text-3xl text-white" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;
