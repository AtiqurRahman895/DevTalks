import React from "react";

const UserBanner = () => {
  return (
    <div className="relative md:mb-24 mb-12">
      {/* user banner */}
      <img
        src="https://i.etsystatic.com/30097568/r/il/71a49c/5958491123/il_570xN.5958491123_lhzi.jpg"
        alt=""
        className="w-full object-cover max-h-80 rounded-lg"
      />

      {/* user profile photo*/}
      <div className="avatar absolute lg:-bottom-24 md:-bottom-16 sm:-bottom-7 -bottom-10 md:left-10 sm:left-20 left-[32%]">
        <div className="lg:w-60 md:w-40 w-32 rounded-full border-4 border-custom-primary">
          <img src="https://i.pinimg.com/736x/92/6c/8e/926c8e161cde3909dcd0f54fa1ff9483.jpg" />
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
