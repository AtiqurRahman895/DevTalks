import React from "react";
import { FaTrophy, FaBug, FaCode } from "react-icons/fa";

const UserBadge = () => {
  const badges = [
    {
      name: "Top Contributor",
      icon: <FaTrophy className="text-yellow-400" />,
      description: "Awarded for high engagement and contributions.",
    },
    {
      name: "Bug Hunter",
      icon: <FaBug className="text-red-500" />,
      description: "Given to users who report and help fix issues.",
    },
    {
      name: "Expert Coder",
      icon: <FaCode className="text-blue-500" />,
      description: "Earned by users with high-quality coding contributions.",
    },
  ];

  return (
    <div className="mt-2 text-white rounded-lg shadow-lg w-full max-w-sm">
      <h4 className="text-lg font-semibold text-white pb-2">Achievements</h4>
      <div className="grid grid-cols-3 gap-4">
        {badges.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-gray-800 p-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <span className="text-3xl">{item.icon}</span>
            <p className="text-sm font-medium text-gray-300 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBadge;