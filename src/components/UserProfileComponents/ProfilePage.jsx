import React from 'react'
import UserBanner from './UserBanner'
import UserInfo from './UserInfo'
import ProfileLayout from './ProfileLayout/ProfileLayout'

const ProfilePage = () => {
  return (
    <div className='min-h-screen container'>
        {/* user banner image and profile image */}
        <UserBanner />

        <div className='container flex items-start gap-8'>
            {/* user information */}
            <UserInfo />

            
            <div className='flex-1'>
            <ProfileLayout />
            </div>
        </div>

    </div>
  )
}

export default ProfilePage
