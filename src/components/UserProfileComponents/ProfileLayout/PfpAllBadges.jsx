import PfpBadgesCard from "./PfpBadgesCard";
import useUserData from "../../../Hooks/User Profile/useUserData";
import NothingProfile from "../../CommonComponents/UserProfile/NothingProfile";
import ProfileLoader from "../../CommonComponents/UserProfile/ProfileLoader";

const PfpAllBadges = () => {

  const {data: badges, isLoading: badgeLoading} = useUserData("badges/badge")

  if(badgeLoading){
    return (
      <ProfileLoader />
    );
  }

  if (badges?.length === 0) {
    return (
      <NothingProfile title="User has No Badge" />
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
      {badges?.badges?.map((badge, index) => (
        <PfpBadgesCard badge={badge} key={index}/>
      ))}
    </div>
  );
};

export default PfpAllBadges;
