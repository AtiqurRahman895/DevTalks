import React from 'react'
import UserBanner from './UserBanner'
import UserInfo from './UserInfo'
import ProfileLayout from './ProfileLayout/ProfileLayout'
import PageTitle from '../CommonComponents/PageTitle'

const ProfilePage = () => {
  return (
    <div className='min-h-screen container mb-10'>
        <PageTitle title="Jhon Profile" />
        {/* user banner image and profile image */}
        <UserBanner />

        <div className='flex md:flex-row flex-col items-start gap-8 md:mt-5'>
            {/* user information */}
            <UserInfo />

            {/* user all activity */}
            <ProfileLayout />
        </div>

    </div>
  )
}

export default ProfilePage
