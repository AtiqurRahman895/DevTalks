import React from "react";
import useUserData from "../../Hooks/User Profile/useUserData";
import { FaTrophy, FaBug, FaCode, FaUsers, FaLightbulb, FaStar, FaRocket, FaQuestionCircle } from 'react-icons/fa';

const getBadgeIcon = (badgeName) => {
  switch (badgeName) {
    case 'Top Contributor':
      return <FaTrophy className="text-yellow-500 text-5xl" />;
    case 'Bug Hunter':
      return <FaBug className="text-red-500 text-5xl" />;
    case 'Expert Coder':
      return <FaCode className="text-blue-500 text-5xl" />;
    case 'Community Helper':
      return <FaUsers className="text-green-500 text-5xl" />;
    case 'Innovator':
      return <FaLightbulb className="text-purple-500 text-5xl" />;
    case 'Hall of Fame':
      return <FaStar className="text-yellow-400 text-5xl" />;
    case 'Fast Learner':
      return <FaRocket className="text-orange-500 text-5xl" />;
    case 'Answer Hero':
      return <FaUsers className="text-green-500 text-5xl" />;
    case 'Question Master':
      return <FaQuestionCircle className="text-purple-500 text-5xl" />;
    default:
      return <FaStar className="text-gray-400 text-5xl" />; // fallback icon
  }
};

const UserBadge = () => {
  const { data: badges = [] } = useUserData("badges/badge");

  if (badges.length) return null;


  return (
    <div className="mt-2 text-white rounded-lg shadow-lg w-full max-w-sm">
      <h4 className="text-lg font-semibold text-white pb-2">Achievements</h4>
      <div className="grid grid-cols-3 gap-4">
        {badges.badges?.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-custom-half-gray p-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <span className="text-lg">{getBadgeIcon(item.name)}</span>
            <p className="text-sm font-medium text-gray-300 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBadge;
