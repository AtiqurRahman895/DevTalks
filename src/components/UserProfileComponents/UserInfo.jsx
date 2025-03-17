import React from "react";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";

const UserInfo = () => {
  return (
    <div className="min-h-screen w-96 ml-16">
      <h2 className="text-left">Jhon Wick</h2>
      <h5 className="text-left text-custom-primary">Frontend Developer</h5>
      <p className="pt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        provident corporis et tenetur debitis laudantium sed enim sit
        architecto. Aspernatur!
      </p>

      {/* social links */}
      <ProfileLinks />

      <div className="border-b border-gray-600 my-4"></div>

      {/* badges or achievement */}
      <UserBadge />
    </div>
  );
};

export default UserInfo;
