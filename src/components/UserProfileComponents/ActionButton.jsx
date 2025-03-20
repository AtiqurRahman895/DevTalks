import React from "react";
import { BiChat } from "react-icons/bi";
import { CgUserAdd } from "react-icons/cg";

const ActionButton = ({ className }) => {
  return (
    <div className={`flex items-center gap-4 pb-3 ${className}`}>
      <button className="flex items-center gap-1 bg-custom-gray py-1 px-3 rounded-lg">
        <BiChat className="text-xl" />
        Message
      </button>

      <button className="bg-custom-primary py-1 px-3 rounded-lg flex items-center gap-1">
        <CgUserAdd className="text-xl" />
        Add Friend
      </button>
    </div>
  );
};

export default ActionButton;
