import React from "react";
import SectionBanner from "../CommonComponents/SectionBanner";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const supportInfo = [
    {
      type: "Email",
      value: "support@stackoverflowclone.com",
      icon: <FaEnvelope />, // Envelope icon
    },
    {
      type: "Phone",
      value: "+1 (123) 456-7890",
      icon: <FaPhone />, // Phone icon
    },
    {
      type: "Address",
      value: "123 Developer Lane, Code City, Techland",
      icon: <FaMapMarkerAlt />, // Location pin icon
    },
    {
      type: "Twitter",
      value: "",
      icon: <FaTwitter />, // Twitter icon
    },
    {
      type: "GitHub",
      value: "",
      icon: <FaGithub />, // GitHub icon
    },
    {
      type: "LinkedIn",
      value: "",
      icon: <FaLinkedin />, // LinkedIn icon
    },
  ];

  return (
    <div>
      <SectionBanner title={"Contact Us"} />

      <h2 className="font-bold border-l-8 border-custom-primary pl-4 mb-6">
        Get in Touch:
        <strong className="text-custom-primary ml-2">
          We're Here to Answer Your Question
        </strong>
      </h2>
      {/* Support Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {supportInfo.map((item, ind) => (
          <a
            href={item.value}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300 ease-in-out text-center"
            key={ind}
          >
            {/* Icon with rounded border */}
            <div className="flex items-center justify-center w-16 h-16 border-2 border-blue-500 rounded-full">
              <span className="text-3xl text-blue-500">{item.icon}</span>
            </div>
            {/* Type and value */}
            <div>
              <h4 className="font-semibold text-gray-700">{item.type}</h4>
              <a className="text-sm text-gray-500">{item.value}</a>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center min-h-scree my-24">
        {/* Title */}
        <h1 className="text-4xl font-bold text-custom-primary mb-6 text-center">
          Let's Connect
        </h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 backdrop-blur-sm border border-gray-300/20 rounded-lg p-6 shadow-lg mt-10 w-full max-w-3xl">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="col-span-1 md:col-span-2 p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm"
          />
          {/* Textarea */}
          <textarea
            placeholder="Your Message"
            className="col-span-1 md:col-span-2 h-32 p-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-lg border-2 border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
