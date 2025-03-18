import React from "react";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";

const UserInfo = () => {
  return (
    <div className="lg:w-96 lg:ml-16 md:ml-6">
      {/* user Information */}
      <h2 className="md:text-left text-center">Jhon Wick</h2>
      <h5 className="md:text-left text-center text-custom-primary">Frontend Developer</h5>
      <p className="pt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        provident corporis et tenetur debitis laudantium sed enim sit
        architecto. Aspernatur!
      </p>

      {/* social links */}
      <ProfileLinks />

      {/* divider */}
      <div className="border-b border-gray-600 my-4"></div>

      {/* badges or achievement */}
      <UserBadge />
    </div>
  );
};

export default UserInfo;
