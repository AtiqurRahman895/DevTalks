import React from "react";
import { Link } from "react-router";

const SectionBanner = ({ title }) => {
  return (
    <section className="">
        <div
          className="text-center py-24 bg-cover bg-center rounded-lg mt-8"
          style={{
            backgroundImage: "url('/SectionBanner.jpg')", // Replace with your image name
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="font-bold text-white mb-4">{title}</h1>
        </div>
    </section>

  );
};

export default SectionBanner;
