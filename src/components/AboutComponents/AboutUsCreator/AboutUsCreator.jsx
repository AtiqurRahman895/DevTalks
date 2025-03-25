import React from "react";
import { FaUserAlt, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CreatorCard from "./CreatorCard";

const AboutUsCreator = () => {
  const developers = [
    {
      name: "John Doe",
      title: "Frontend Developer",
      image:
        "https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/480703189_1886190845567794_8761415238041919415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJwC4bom4TksQi6tluHkYutGZiBdi5DF60ZmIF2LkMXk_ZPTAyLs6hQwssk-vSyl-TcKMNs5mSTGFyjZOQzl5W&_nc_ohc=8poCB9G5fSkQ7kNvgEOwtXm&_nc_oc=Adl0CTsIDWDP6N8MRmjE24rN7b7Z1_-fZHCgERjf74xKIj9QESlXY0KIs2OniCgi5ho&_nc_zt=23&_nc_ht=scontent.fdac145-1.fna&_nc_gid=UejkLcikmdK8quf30ViGnQ&oh=00_AYGkkK3WDCbLq6yHk8FQ-iIrkGOqaNEx5H4l_Rt6NVXw3Q&oe=67E4FB85",
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
        "https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/480703189_1886190845567794_8761415238041919415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJwC4bom4TksQi6tluHkYutGZiBdi5DF60ZmIF2LkMXk_ZPTAyLs6hQwssk-vSyl-TcKMNs5mSTGFyjZOQzl5W&_nc_ohc=8poCB9G5fSkQ7kNvgEOwtXm&_nc_oc=Adl0CTsIDWDP6N8MRmjE24rN7b7Z1_-fZHCgERjf74xKIj9QESlXY0KIs2OniCgi5ho&_nc_zt=23&_nc_ht=scontent.fdac145-1.fna&_nc_gid=UejkLcikmdK8quf30ViGnQ&oh=00_AYGkkK3WDCbLq6yHk8FQ-iIrkGOqaNEx5H4l_Rt6NVXw3Q&oe=67E4FB85",
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
        "https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/480703189_1886190845567794_8761415238041919415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJwC4bom4TksQi6tluHkYutGZiBdi5DF60ZmIF2LkMXk_ZPTAyLs6hQwssk-vSyl-TcKMNs5mSTGFyjZOQzl5W&_nc_ohc=8poCB9G5fSkQ7kNvgEOwtXm&_nc_oc=Adl0CTsIDWDP6N8MRmjE24rN7b7Z1_-fZHCgERjf74xKIj9QESlXY0KIs2OniCgi5ho&_nc_zt=23&_nc_ht=scontent.fdac145-1.fna&_nc_gid=UejkLcikmdK8quf30ViGnQ&oh=00_AYGkkK3WDCbLq6yHk8FQ-iIrkGOqaNEx5H4l_Rt6NVXw3Q&oe=67E4FB85",
      bio: "Passionate about building end-to-end solutions with MERN stack and DevOps.",
      socialLinks: {
        twitter: "https://twitter.com/michaelbrown",
        github: "https://github.com/michaelbrown",
        linkedin: "https://linkedin.com/in/michaelbrown",
      },
    },
  ];
  return (
    <div className="my-32">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 mt-20">
        {developers.map((dev, ind) => (
          <CreatorCard key={ind} developer={dev} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsCreator;
