import React, { useContext, useEffect, useState } from "react";
import {
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaRocket,
  FaQuestionCircle,
} from "react-icons/fa";
import PfpBadgesCard from "./PfpBadgesCard";
import { ProfileContext } from "../../../Provider/ProfileProvider";
import { secureAxios } from "../../../Hooks/useSecureAxios";
import useUserData from "../../../Hooks/User Profile/useUserData";

const PfpAllBadges = () => {
  // const {userDetails} = useContext(ProfileContext);
  //     const [badges, setBadges] = useState([]);
  //     const [loader, setLoader] = useState(false);
    
  //     useEffect(() => {
  //       const fetchAllBadges = async () => {
  //         if (userDetails?.email) {
  //           try {
  //             setLoader(true)
  //             const res = await secureAxios.get(
  //               `/badges/badge/${userDetails?.email}`
  //             );
  //             console.log(res.data);
  //             setBadges(res.data)
  //           } catch (error) {
  //             console.log(error);
  //           }
  //           finally{
  //             setLoader(false)
  //           }
  //         }
  //       };
    
  //       fetchAllBadges();
  //     }, [userDetails?.email]);

  const {data: badges, isLoading: badgeLoading} = useUserData("badges/badge")

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
      {badges?.badges?.map((badge, index) => (
        <PfpBadgesCard badge={badge} key={index}/>
      ))}
    </div>
  );
};

export default PfpAllBadges;
