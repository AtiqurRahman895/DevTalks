import React from 'react';
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

const PfpBadgesCard = ({ badge }) => {
  return (
    <div className="p-6 rounded-2xl shadow-lg border bg-custom-half-gray">
      {/* icons and name */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getBadgeIcon(badge.name)}
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
            {badge.name}
          </h5>
        </div>

        {/* badge level */}
        <p
          className={`px-3 py-1 rounded-full font-bold text-white ${
            badge.level === 'Gold'
              ? 'bg-yellow-500'
              : badge.level === 'Silver'
              ? 'bg-gray-500'
              : 'bg-yellow-800'
          }`}
        >
          {badge.level}
        </p>
      </div>

      {/* badge description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        {badge.description}
      </p>
    </div>
  );
};

export default PfpBadgesCard;
