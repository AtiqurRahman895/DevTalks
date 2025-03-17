import React from "react";
import { NavLink, Outlet } from "react-router";
import { FaQuestionCircle, FaCheckCircle, FaMedal } from "react-icons/fa";

const ProfileNav = () => {
    const navLinks = [
      { name: "All Questions", path: "/profile/questions", icon: <FaQuestionCircle /> },
      { name: "All Answers", path: "/profile/answers", icon: <FaCheckCircle /> },
      { name: "All Badges", path: "badges", icon: <FaMedal /> },
    ];
  
    return (
      <div className="">
        <nav className="flex gap-10 border rounded-2xl py-2 px-6 mb-4 text-base bg-gray-800 text-white max-w-[440px]">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex items-center gap-2 hover:text-custom-primary transition"
            >
              {link.icon} {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };
  
  export default ProfileNav;
  
