import React from 'react'
import ProfileNav from './ProfileNav'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
  return (
    <div>
      <ProfileNav />
      <Outlet />
    </div>
  )
}

export default ProfileLayout
