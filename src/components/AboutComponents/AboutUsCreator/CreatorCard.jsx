import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const CreatorCard = ({ developer }) => {
  return (
    <div className="bg-custom-half-gray text-white pb-12 rounded-xl transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-center items-center">
        <img
          src={developer.image}
          alt={developer.name}
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>

      <div className="px-8 mt-4">
        <h4 className="font-semibold text-center text-white">{developer.name}</h4>
        <p className="text-center text-base font-bold text-custom-primary">{developer.title}</p>
        <p className="mt-4 text-center text-white text-base px-6">{developer.bio}</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        {developer.socialLinks.twitter && (
          <a
            href={developer.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform transition-all duration-300 hover:scale-110"
          >
            <FaTwitter style={{ fontSize: "1.5rem" }} />
          </a>
        )}
        {developer.socialLinks.github && (
          <a
            href={developer.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform transition-all duration-300 hover:scale-110"
          >
            <FaGithub style={{ fontSize: "1.5rem" }} />
          </a>
        )}
        {developer.socialLinks.linkedin && (
          <a
            href={developer.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin style={{ fontSize: "1.5rem" }} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CreatorCard;
