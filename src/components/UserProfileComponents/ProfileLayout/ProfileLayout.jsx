import React from 'react'
import ProfileNav from './ProfileNav'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
  return (
    <div className='w-full'>
      {/* profile navbar */}
      <ProfileNav />

      {/* all question, all answers, all badges */}
      <Outlet />
    </div>
  )
}

export default ProfileLayout
