import React from "react";
import { Link } from "react-router";

const SectionBanner = ({ title }) => {
  return (
    <div
      className="text-center py-24 container bg-cover bg-center rounded-lg mb-8"
      style={{
        backgroundImage: "url('/SectionBanner.jpg')", // Replace with your image name
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-bold text-white mb-4">{title}</h3>
      <p className="cursor-pointer sm:w-4/5 md:w-2/4 mx-auto text-white leading-relaxed">
        <Link to="/" className="badge mr-1 text-white">
          Home
        </Link>{" "}
        / <span className="badge text-white ml-1">{title}</span>
      </p>
    </div>
  );
};

export default SectionBanner;
