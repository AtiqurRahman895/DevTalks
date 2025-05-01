import React from "react";
import UserBanner from "./UserBanner";
import ProfileLayout from "./ProfileLayout/ProfileLayout";
import PageTitle from "../CommonComponents/PageTitle";
import UserInfo from "./UserInfo";


const ProfilePage = () => {

  return (
      <div className="min-h-screen container py-16">
        <PageTitle title="Profile" />
        {/* user banner image and profile image */}
        <UserBanner />

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:mt-5">
          {/* user information */}
          <UserInfo />
          {/* user all activity */}
          <ProfileLayout />
        </div>
      </div>
  );
};

export default ProfilePage;