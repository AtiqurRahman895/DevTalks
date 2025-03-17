import { FaTrophy, FaBug, FaCode, FaUsers, FaLightbulb, FaStar, FaRocket } from "react-icons/fa";

const PfpAllBadges = () => {

const badges = [
  {
    name: "Top Contributor",
    icon: <FaTrophy className="text-yellow-500" />,
    description: "Awarded for high engagement and contributions.",
    criteria: "Earned by posting high-quality content and helping others.",
    level: "Gold",
  },
  {
    name: "Bug Hunter",
    icon: <FaBug className="text-red-500" />,
    description: "Given to users who report and help fix issues.",
    criteria: "Report at least 10 verified bugs.",
    level: "Silver",
  },
  {
    name: "Expert Coder",
    icon: <FaCode className="text-blue-500" />,
    description: "Earned by users with high-quality coding contributions.",
    criteria: "Submit 20+ well-rated code snippets.",
    level: "Gold",
  },
  {
    name: "Community Helper",
    icon: <FaUsers className="text-green-500" />,
    description: "For helping and mentoring new users.",
    criteria: "Provide 50+ helpful responses to other users.",
    level: "Silver",
  },
  {
    name: "Innovator",
    icon: <FaLightbulb className="text-purple-500" />,
    description: "Awarded to users who propose new features or improvements.",
    criteria: "Suggest 5+ accepted feature ideas.",
    level: "Bronze",
  },
  {
    name: "Hall of Fame",
    icon: <FaStar className="text-yellow-400" />,
    description: "Special recognition for long-term contributions.",
    criteria: "Active for 1+ years with consistent quality contributions.",
    level: "Gold",
  },
  {
    name: "Fast Learner",
    icon: <FaRocket className="text-orange-500" />,
    description: "Recognized for rapid skill development.",
    criteria: "Complete 5+ advanced tutorials or certifications.",
    level: "Silver",
  },
];
  return (
    <div>
      
    </div>
  )
}

export default PfpAllBadges
