import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaIdBadge,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const profileData = [
  { icon: <FaMapMarkerAlt />, text: "Sylhet, Bangladesh", link: "" },
  {
    icon: <FaEnvelope />,
    text: "jhonwick434@gmail.com.",
    link: "mailto:jhonwick434@gmail.com.",
  },
  {
    icon: <FaIdBadge />,
    text: "https://orcid.org/0009-0002-7739-9112",
    link: "https://orcid.org/0009-0002-7739-9112",
  },
  {
    icon: <FaLinkedin />,
    text: "in/jhon45",
    link: "https://linkedin.com/in/jhon45",
  },
  {
    icon: <FaFacebook />,
    text: "Jhon Wick",
    link: "https://facebook.com/das",
  },
];

const ProfileLinks = () => {
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
