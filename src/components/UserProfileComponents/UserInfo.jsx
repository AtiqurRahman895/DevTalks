import React from 'react'
import ProfileLinks from './ProfileLinks'

const UserInfo = () => {
  return (
    <div className='min-h-screen w-96 pl-16'>
      <h2 className='text-left'>Jhon Wick</h2>
      <h5 className='text-left text-custom-primary'>Frontend Developer</h5>
      <p className='pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore provident corporis et tenetur debitis laudantium sed enim sit architecto. Aspernatur!</p>

      <ProfileLinks />

    </div>
  )
}

export default UserInfo
