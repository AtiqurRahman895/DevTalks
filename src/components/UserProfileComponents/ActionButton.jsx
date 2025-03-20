import React from "react";
import { BiChat } from "react-icons/bi";
import { CgUserAdd } from "react-icons/cg";
import { Link } from "react-router";

const ActionButton = ({ className }) => {
  return (
    <div className={`flex items-center gap-4 pb-3 ${className}`}>
      <Link to="/message/Jhon%20Wick">
        <button className="flex items-center gap-1 bg-Custom-Gray py-1 px-3 rounded-lg">
          <BiChat className="text-xl" />
          Message
        </button>
      </Link>

      <button className="bg-custom-primary py-1 px-3 rounded-lg flex items-center gap-1">
        <CgUserAdd className="text-xl" />
        Add Friend
      </button>
    </div>
  );
};

export default ActionButton;
