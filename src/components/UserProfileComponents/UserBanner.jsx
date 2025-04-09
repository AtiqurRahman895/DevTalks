import React, { useContext } from "react";
import { ProfileContext } from "../../Provider/ProfileProvider";

const UserBanner = () => {
   const {userDetails} = useContext(ProfileContext);
  return (
    <div className="relative">
      {/* user banner */}
      <img
        src="https://i.etsystatic.com/30097568/r/il/71a49c/5958491123/il_570xN.5958491123_lhzi.jpg"
        alt=""
        className="w-full object-cover max-h-80 rounded-lg"
      />

      {/* user profile photo*/}
      <div className="avatar absolute lg:-bottom-24 md:-bottom-16 sm:-bottom-7 -bottom-10 md:left-10 sm:left-20 left-[32%]">
        <div className="lg:w-60 md:w-40 w-32 rounded-full border-4 object-cover object-center border-custom-primary">
          <img src={userDetails?.photoURL} className="" />
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
