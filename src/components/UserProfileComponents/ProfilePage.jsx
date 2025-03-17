import React from 'react'
import UserBanner from './UserBanner'
import UserInfo from './UserInfo'

const ProfilePage = () => {
  return (
    <div className='min-h-screen container'>
        {/* user banner image and profile image */}
        <UserBanner />

        <div className='container'>
            {/* user information */}
            <UserInfo />
        </div>

    </div>
  )
}

export default ProfilePage
