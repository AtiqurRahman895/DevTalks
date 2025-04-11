import React from "react";
import { NavLink } from "react-router";
import { FaQuestionCircle, FaCheckCircle, FaMedal } from "react-icons/fa";
import ActionButton from "../ActionButton";

const ProfileNav = () => {
    const navLinks = [
      { name: "Questions", path: "questions", icon: <FaQuestionCircle /> },
      { name: "Answers", path: "answers", icon: <FaCheckCircle /> },
      { name: "Badges", path: "badges", icon: <FaMedal /> },
    ];
  
    return (
      <div className="flex items-center lg:flex-row flex-col-reverse lg:items-center lg:justify-between">
        <nav className="flex justify-between xs:justify-center xs:gap-10 py-2 px-6 mb-4 bg-custom-half-gray border border-custom-gray rounded-lg text-white xs:max-w-[370px] w-full">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex items-center gap-1 hover:text-custom-primary duration-300"
            >
              {link.icon} {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Message and Add friend button only for mid and large devices */}
        <ActionButton className="max-[500px]:hidden" />

      </div>
    );
  };
  
  export default ProfileNav;
  
