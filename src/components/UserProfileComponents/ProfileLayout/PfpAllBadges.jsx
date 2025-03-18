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
import PfpBadgesCard from "./PfpBadgesCard";

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
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
      {badges.map((badge, index) => (
        <PfpBadgesCard badge={badge} key={index}/>
      ))}
    </div>
  );
};

export default PfpAllBadges;
