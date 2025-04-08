import React, { useEffect, useState } from 'react'
import UserBanner from './UserBanner'
import ProfileLayout from './ProfileLayout/ProfileLayout'
import PageTitle from '../CommonComponents/PageTitle'
import { AuthContext } from '../../Provider/AuthProvider'
import UserInfo from './UserInfo'
import { normalAxios } from '../../Hooks/useNormalAxios'
import { useParams } from 'react-router'


const ProfilePage = () => {
  const param = useParams()
  // console.log(param.userName)
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (param?.userName) {
        try {
          const res = await normalAxios.get(`/users/profile/${param?.userName}`);
          setUserDetails(res.data);
        } catch (err) {
          console.error("Error fetching user details:", err);
        }
      }
    };

    fetchUserDetails();
  }, [param.userName]);

  return (
    <div className='min-h-screen container mb-10'>
        <PageTitle title="Jhon Profile" />
        {/* user banner image and profile image */}
        <UserBanner user={userDetails}  />

        <div className='flex md:flex-row flex-col items-start gap-8 md:mt-5'>
            {/* user information */}
            <UserInfo userDetails={userDetails} setUserDetails={setUserDetails}/>
            {/* user all activity */}
            <ProfileLayout />
        </div>

    </div>
  )
}

export default ProfilePage
