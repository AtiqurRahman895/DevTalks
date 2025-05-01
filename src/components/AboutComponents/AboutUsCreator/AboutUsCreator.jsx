import React from "react";
import { FaUserAlt, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CreatorCard from "./CreatorCard";

const AboutUsCreator = () => {
  const developers = [
    {
      name: "John Doe",
      title: "Frontend Developer",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/035/752/578/small/ai-generated-happy-businessman-standing-in-office-with-suit-smiling-professional-executive-manager-ai-generated-free-photo.jpg",
      bio: "Specialized in building interactive UIs with React.js and Tailwind CSS.",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      title: "Backend Developer",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/039/072/522/small/ai-generated-a-professional-executive-exudes-confidence-conveying-authority-and-approachability-with-a-warm-smile-free-photo.jpeg",
      bio: "Expert in Node.js, MongoDB, and creating scalable backend architectures.",
      socialLinks: {
        twitter: "https://twitter.com/janesmith",
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
    {
      name: "Michael Brown",
      title: "Full Stack Developer",
      image:
        "https://img.freepik.com/free-photo/close-up-happy-executive_1098-768.jpg",
      bio: "Passionate about building end-to-end solutions with MERN stack and DevOps.",
      socialLinks: {
        twitter: "https://twitter.com/michaelbrown",
        github: "https://github.com/michaelbrown",
        linkedin: "https://linkedin.com/in/michaelbrown",
      },
    },
  ];
  return (
    <section className="">
      <div className="container space-y-10">
        {/* title */}
        <h3 className="text-center mx-auto">
          {" "}
          Meet the <strong className="text-custom-primary">
            Developers
          </strong>{" "}
          Behind <br /> This{" "}
          <strong className="text-custom-primary">
            <strong className="text-custom-primary">Developers</strong>
          </strong>{" "}
          Project Leaders
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {developers.map((dev, ind) => (
            <CreatorCard key={ind} developer={dev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsCreator;
