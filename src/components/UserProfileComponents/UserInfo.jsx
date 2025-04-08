import React from "react";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";

const UserInfo = ({user}) => {
  return (
    <div className="lg:w-96 lg:ml-10 md:ml-8 lg:mt-20 md:mt-12 mt-10">
      {/* user Information */}
      <h2 className="md:text-left text-center">{user?.name}</h2>
      <h5 className="md:text-left text-center text-custom-primary">
        Frontend Developer
      </h5>
      {/* Message and Add friend button only shows in small devices */}
      <ActionButton className="md:hidden justify-center mt-4" />
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
