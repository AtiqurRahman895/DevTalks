import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaIdBadge,
  FaLinkedin,
  FaFacebook,
  FaBuilding,
} from "react-icons/fa";



const ProfileLinks = ({userDetails}) => {

  const profileData = [
    { icon: <FaMapMarkerAlt />, text: userDetails?.location, link: "" },
    {
      icon: <FaEnvelope />,
      text: userDetails?.email,
      link: "mailto:jhonwick434@gmail.com.",
    },
    {
      icon: <FaBuilding />,
      text: userDetails?.organization,
      link: "",
    },
    {
      icon: <FaLinkedin />,
      text: userDetails?.linkedinName,
      link: userDetails?.linkedinLink,
    },
    {
      icon: <FaFacebook />,
      text: userDetails?.facebookName,
      link: userDetails?.facebookLink,
    },
  ];
  return (
    <div className="text-white rounded-lg w-full mt-2">
      {profileData.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 py-2 border-b border-gray-700 last:border-b-0"
        >
          <span className="text-lg">{item.icon}</span>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:underline"
            >
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default ProfileLinks;
