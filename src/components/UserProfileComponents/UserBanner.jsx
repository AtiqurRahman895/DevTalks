import React, { useContext } from "react";
import { ProfileContext } from "../../Provider/ProfileProvider";
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import BannerPicEditModal from "./Modal/BannerPicEditModal";

const UserBanner = () => {
  const { userDetails, refetch } = useContext(ProfileContext);
  const { user } = useContext(AuthContext);

  console.log(userDetails)

  const isCurrentUser = user?.email === userDetails?.email;
  const modalId = `my_modal_${
    userDetails?.email?.replace(/\s+/g, "_") || "user"
  }`;

  const handleCoverPhotoEdit = () => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="relative">
      {/* user banner */}
      <img
        src={userDetails.coverImage}
        alt=""
        className="w-full object-cover max-h-80 rounded-lg"
      />

      {/* user profile photo*/}
      <div className="avatar absolute lg:-bottom-24 md:-bottom-16 sm:-bottom-7 -bottom-10 md:left-10 sm:left-20 left-[32%]">
        <div className="lg:w-60 md:w-40 w-32 rounded-full border-4 object-cover object-center border-custom-primary">
          <img src={userDetails?.photoURL} className="" />
        </div>
      </div>

      {isCurrentUser && (
        <button
          onClick={handleCoverPhotoEdit}
          className="btn absolute right-1 bottom-1 text-base"
        >
          <FaCamera /> Edit Cover Photo
        </button>
      )}

      <BannerPicEditModal modalId={modalId} userEmail={userDetails?.email} refetch={refetch} />
    </div>
  );
};

export default UserBanner;
