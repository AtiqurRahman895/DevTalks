import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProfileLinks from "./ProfileLinks";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";
import { AuthContext } from "../../Provider/AuthProvider";
import { ProfileContext } from "../../Provider/ProfileProvider";
import UserInfoModal from "./Modal/UserInfoModal";

const UserInfo = () => {
  const { userDetails, setUserDetails } = useContext(ProfileContext) || {};
  const { user } = useContext(AuthContext) || {};
  
  // Early return if required context data is missing
  if (!userDetails || !setUserDetails || !user) {
    console.warn("Missing context data in UserInfo component");
    return (
      <div className="lg:w-96 lg:ml-10 md:ml-8 lg:mt-20 md:mt-12 mt-10">
        <p className="text-red-500">Error loading user information</p>
      </div>
    );
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
    <div className="lg:w-96 lg:ml-10 md:ml-8 lg:mt-20 md:mt-12 mt-10">
      {/* User Information */}
      <section aria-label="User Information">
        <h3 className="md:text-left text-center">
          {userDetails.name || "Unnamed User"}
        </h3>
        {userDetails.profession && (
          <h4 className="md:text-left text-center text-custom-primary">
            {userDetails.profession}
          </h4>
        )}
      </section>

      {/* Action Button for Mobile */}
      <div className="md:hidden flex justify-center mt-4">
        <ActionButton />
      </div>

      {/* Bio */}
      {userDetails.bio && (
        <p className="pt-3 leading-relaxed text-justify break-words">{userDetails.bio}</p>
      )}

      {/* Social Links */}
      <ProfileLinks userDetails={userDetails} />

      {/* Divider */}
      <hr className="border-b border-gray-600 my-4" />

      {/* Edit Button (only for current user) */}
      {isCurrentUser && (
        <button
          onClick={handleEditClick}
          className="w-full btn text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          aria-label="Edit Profile Details"
        >
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

// UserInfo.propTypes = {
//   // No props are directly passed, but documenting context expectations
//   userDetails: PropTypes.shape({
//     name: PropTypes.string,
//     profession: PropTypes.string,
//     bio: PropTypes.string,
//     email: PropTypes.string,
//   }),
//   setUserDetails: PropTypes.func,
//   user: PropTypes.shape({
//     email: PropTypes.string,
//   }),
// };

export default UserInfo;