import React, { useContext } from "react";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";
import { AuthContext } from "../../Provider/AuthProvider";
import UserInfoModal from "./Modal/UserInfoModal";

const UserInfo = ({ userDetails }) => {
  const { user } = useContext(AuthContext);
  const isCurrentUser = user?.email === userDetails?.email
  // console.log(user.email);
  // console.log(userDetails.email)
  // console.log(isCurrentUser)

  return (
    <div className="lg:w-96 lg:ml-10 md:ml-8 lg:mt-20 md:mt-12 mt-10">
      {/* user Information */}
      <h2 className="md:text-left text-center">{userDetails?.name}</h2>
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
      <ProfileLinks userDetails={userDetails} />

      {/* divider */}
      <div className="border-b border-gray-600 my-4"></div>

      {/* edit button for user just for your own account */}
      {isCurrentUser && <button onClick={() => document.getElementById(`my_modal_${userDetails.name}`).showModal()} className="w-full btn text-white">Edit Details</button>}

      {/* badges or achievement */}
      <UserBadge />

      <UserInfoModal userDetails={userDetails} />
    </div>
  );
};

export default UserInfo;
