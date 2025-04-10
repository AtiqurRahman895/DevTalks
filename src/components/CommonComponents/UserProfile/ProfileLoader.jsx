import React from 'react'
import Loading from '../../AuthenticationComponents/Loading'

const ProfileLoader = () => {
  return (
    <div className="flex items-start justify-center min-h-[200px] w-full rounded-lg shadow-md p-6">
          <Loading />
        </div>
  )
}

export default ProfileLoader
