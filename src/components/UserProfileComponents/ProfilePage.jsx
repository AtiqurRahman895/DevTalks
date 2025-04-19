import React from "react";
import UserBanner from "./UserBanner";
import ProfileLayout from "./ProfileLayout/ProfileLayout";
import PageTitle from "../CommonComponents/PageTitle";
import UserInfo from "./UserInfo";


const ProfilePage = () => {

  return (
<<<<<<< Updated upstream
    <ProfileProvider>
      <div className="min-h-screen container mb-10">
        <PageTitle title="Jhon Profile" />
=======
    <>
      <div className="min-h-screen container py-16">
        <PageTitle title="Profile" />
>>>>>>> Stashed changes
        {/* user banner image and profile image */}
        <UserBanner />

        <div className="flex md:flex-row flex-col items-start gap-8 md:mt-5">
          {/* user information */}
          <UserInfo />
          {/* user all activity */}
          <ProfileLayout />
        </div>
      </div>
      </>

  );
};

export default ProfilePage;