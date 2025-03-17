import React from 'react'
import ProfileNav from './ProfileNav'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
  return (
    <>
      {/* profile navbar */}
      <ProfileNav />

      <Outlet />
    </>
  )
}

export default ProfileLayout
