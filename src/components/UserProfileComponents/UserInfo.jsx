import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";
import { AuthContext } from "../../Provider/AuthProvider";
import { ProfileContext } from "../../Provider/ProfileProvider";
import UserInfoModal from "./Modal/UserInfoModal";
import { FaPencilAlt } from "react-icons/fa";
import Loading from "../AuthenticationComponents/Loading";
import ProfileSkeletonLoader from "./ProfileLoader/ProfileLoader";

const UserInfo = () => {
  const { userDetails, setUserDetails, isLoading } = useContext(ProfileContext) || {};
  const { user } = useContext(AuthContext) || {};
  // console.log(userDetails)
  
  // Early return if required context data is missing
  if (!userDetails || !setUserDetails || !user) {
    console.warn("Missing context data in UserInfo component");
    return (
      <div className="lg:w-96 lg:ml-10 md:ml-8 lg:mt-20 md:mt-12 mt-10">
        <p className="text-red-500">Error loading user information</p>
      </div>
    );
  }

  if(isLoading){
    return(
      <ProfileSkeletonLoader />
    )
  }

  const isCurrentUser = user.email === userDetails.email;
  const modalId = `my_modal_${userDetails.name?.replace(/\s+/g, "_") || "user"}`;

  const handleEditClick = () => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="w-full lg:w-3/4 mt-10 md:mt-20">
      {/* User Information */}
      <section aria-label="User Information">
        <h3 className="">
          {userDetails.name || "Unnamed User"}
        </h3>
        {userDetails.profession && (
          <h4 className="text-custom-primary">
            {userDetails.profession}
          </h4>
        )}
        {/* <ActionButton /> */}
      </section>

      {/* Bio */}
      {userDetails.bio && (
        <p className="pt-3 leading-relaxed text-justify break-words">{userDetails.bio}</p>
      )}

      {/* Social Links */}
      <ProfileLinks userDetails={userDetails} />

      {/* Divider */}
      <hr className="border-b border-custom-gray my-4" />

      {/* Edit Button (only for current user) */}
      {isCurrentUser && (
        <button
          onClick={handleEditClick}
          className="w-full btn text-white bg-custom-half-gray border border-custom-gray"
          aria-label="Edit Profile Details"
        >
          <FaPencilAlt />
          Edit Details
        </button>
      )}

      {/* Badges */}
      <UserBadge />

      {/* Modal */}
      <UserInfoModal
        modalId={modalId}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </div>
  );
};


export default UserInfo;