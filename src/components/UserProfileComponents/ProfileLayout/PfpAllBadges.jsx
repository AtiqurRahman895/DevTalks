import React from "react";
import {
  FaTrophy,
  FaBug,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaRocket,
} from "react-icons/fa";

const PfpAllBadges = () => {
  const badges = [
    {
      name: "Top Contributor",
      icon: <FaTrophy className="text-yellow-500 text-5xl" />,
      description: "Awarded for high engagement and contributions.",
      criteria: "Earned by posting high-quality content and helping others.",
      level: "Gold",
    },
    {
      name: "Bug Hunter",
      icon: <FaBug className="text-red-500 text-5xl" />,
      description: "Given to users who report and help fix issues.",
      criteria: "Report at least 10 verified bugs.",
      level: "Silver",
    },
    {
      name: "Expert Coder",
      icon: <FaCode className="text-blue-500 text-5xl" />,
      description: "Earned by users with high-quality coding contributions.",
      criteria: "Submit 20+ well-rated code snippets.",
      level: "Gold",
    },
    {
      name: "Community Helper",
      icon: <FaUsers className="text-green-500 text-5xl" />,
      description: "For helping and mentoring new users.",
      criteria: "Provide 50+ helpful responses to other users.",
      level: "Silver",
    },
    {
      name: "Innovator",
      icon: <FaLightbulb className="text-purple-500 text-5xl" />,
      description: "Awarded to users who propose new features or improvements.",
      criteria: "Suggest 5+ accepted feature ideas.",
      level: "Bronze",
    },
    {
      name: "Hall of Fame",
      icon: <FaStar className="text-yellow-400 text-5xl" />,
      description: "Special recognition for long-term contributions.",
      criteria: "Active for 1+ years with consistent quality contributions.",
      level: "Gold",
    },
    {
      name: "Fast Learner",
      icon: <FaRocket className="text-orange-500 text-5xl" />,
      description: "Recognized for rapid skill development.",
      criteria: "Complete 5+ advanced tutorials or certifications.",
      level: "Silver",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl shadow-lg border bg-Custom-half-Gray"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {badge.icon}
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                {badge.name}
              </h5>
            </div>
            <span
              className={`px-3 py-1 rounded-full font-bold text-white text-sm ${
                badge.level === "Gold"
                  ? "bg-yellow-500"
                  : badge.level === "Silver"
                  ? "bg-gray-500"
                  : "bg-yellow-800"
              }`}
            >
              {badge.level}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
            {badge.description}
          </p>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs">
            <strong>How to Earn:</strong> {badge.criteria}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PfpAllBadges;
