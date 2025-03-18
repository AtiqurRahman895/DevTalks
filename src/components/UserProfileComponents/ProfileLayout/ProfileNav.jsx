import React from "react";
import { NavLink } from "react-router";
import { FaQuestionCircle, FaCheckCircle, FaMedal } from "react-icons/fa";

const ProfileNav = () => {
    const navLinks = [
      { name: "Questions", path: "/profile/questions", icon: <FaQuestionCircle /> },
      { name: "Answers", path: "/profile/answers", icon: <FaCheckCircle /> },
      { name: "Badges", path: "badges", icon: <FaMedal /> },
    ];
  
    return (
      <>
        <nav className="flex gap-10 border rounded-2xl py-2 px-6 mb-4 text-base bg-gray-800 text-white md:max-w-[440px] w-full">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex items-center gap-1 hover:text-custom-primary transition"
            >
              {link.icon} {link.name}
            </NavLink>
          ))}
        </nav>
      </>
    );
  };
  
  export default ProfileNav;
  
