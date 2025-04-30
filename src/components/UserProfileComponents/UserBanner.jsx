import React, { useContext, useState } from "react";
import { ProfileContext } from "../../Provider/ProfileProvider";
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import BannerPicEditModal from "./Modal/BannerPicEditModal";
import Loading from "../AuthenticationComponents/Loading";

const UserBanner = () => {
  const { userDetails, refetch, isLoading } = useContext(ProfileContext);
  const { user } = useContext(AuthContext);
  const [isProfileImage, setPfp] = useState(false)

  // console.log(userDetails);

  const isCurrentUser = user?.email === userDetails?.email;
  const modalId = `my_modal_${
    userDetails?.email?.replace(/\s+/g, "_") || "user"
  }`;

  const handleCoverPhotoEdit = () => {
    setPfp(false)
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  if(isLoading){
    return(
      <Loading />
    )
  }
  

  const handlePfpPhotoEdit = () => {
    setPfp(true)
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="relative">
      {/* user banner */}
      {userDetails?.coverImage && !isLoading ? (
        <img
          src={userDetails?.coverImage}
          alt=""
          className="w-full object-cover max-h-80 rounded-lg"
        />
      ) : (
        <img
          src="/noImg.jpg"
          className="w-full object-cover max-h-80 rounded-lg"
        />
      )}

      {/* user profile photo*/}
      <div className="avatar absolute lg:-bottom-24 md:-bottom-16 sm:-bottom-7 -bottom-10 left-4">
        <div className="lg:w-60 md:w-40 w-32 rounded-full border-4 object-cover object-center border-custom-primary">
          <img src={userDetails?.photoURL} className="" />
        </div>
        {isCurrentUser && (
        <button
          onClick={handlePfpPhotoEdit}
          className="btn btn-circle absolute right-2 bottom-2 text-white"
        >
          <FaCamera />
        </button>
      )}
      </div>

      {isCurrentUser && (
        <button
          onClick={handleCoverPhotoEdit}
          className="btn absolute right-1 bottom-1 text-white"
        >
          <FaCamera /> Edit
        </button>
      )}

      <BannerPicEditModal
        isProfileImage={isProfileImage}
        modalId={modalId}
        userEmail={userDetails?.email}
        refetch={refetch}
      />
    </div>
  );
};

export default UserBanner;
