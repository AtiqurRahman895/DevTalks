import React from 'react'
import { useParams } from 'react-router'

const UserInbox = () => {
    const {user} = useParams();
  return (
    <div>
        {user}
    </div>
  )
}

export default UserInbox
