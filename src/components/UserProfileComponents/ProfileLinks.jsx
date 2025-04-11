import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaIdBadge,
  FaLinkedin,
  FaFacebook,
  FaBuilding,
} from "react-icons/fa";
import { ProfileContext } from "../../Provider/ProfileProvider";
import { useContext } from "react";

const ProfileLinks = () => {
   const {userDetails} = useContext(ProfileContext);
  // Define the profile data array
  const profileData = [
    { icon: <FaMapMarkerAlt />, text: userDetails?.location, link: "" },
    {
      icon: <FaEnvelope />,
      text: userDetails?.email,
      link: `mailto:${userDetails?.email || ""}`,
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

  // Check if all fields are empty or undefined
  const hasProfileData = profileData.map((item) => item.text);
  // console.log(hasProfileData)
  // If no data is provided, don't render the section
  if (!hasProfileData) {
    return null;
  }

  return (
    <div className="text-white rounded-lg w-full mt-2">
      {profileData.map((item, index) =>
        item.text ? ( 
          <div
            key={index}
            className="flex items-center space-x-3 py-2 border-b border-custom-gray last:border-b-0"
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
        ) : null
      )}
    </div>
  );
};

export default ProfileLinks;