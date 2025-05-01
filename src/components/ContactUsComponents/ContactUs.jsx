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
import PageTitle from "../CommonComponents/PageTitle";

const ContactUs = () => {
  const supportInfo = [
    {
      type: "Email",
      value: "mailto:devtalks@gmail.com",
      icon: <FaEnvelope />, // Envelope icon
    },
    {
      type: "Phone",
      value: "tel:+8801400447787",
      icon: <FaPhone />, // Phone icon
    },
    {
      type: "Address",
      value: "http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003",
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
    <main className="space-y-10">
      <PageTitle title={"Contact Us"} />
      <SectionBanner title={"Contact Us"} />

      <section className="mb-6">
        <div className="container">
          <h3 className="border-l-8 border-custom-primary pl-4">
            Get in Touch:
            <strong className="text-custom-primary ml-2">
              We're Here to Answer Your Question
            </strong>
          </h3>
        </div>
      </section>

      {/* Support Information */}
      <section className="">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <h4 className="">{item.type}</h4>
                  {/* <a className="text-sm text-custom-gray">{item.value}</a> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="pb-10">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Title */}
            <h3 className="text-custom-primary text-center">
              Let's Connect
            </h3>

            {/* Form */}
            <form className="bg-custom-half-gray border border-custom-gray rounded-lg p-6 max-w-[28rem] md:max-w-3xl space-y-4">
              {/* Input Fields */}

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 p-2.5 rounded-md border border-custom-half-gray focus:outline-none bg-custom-half-gray"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 p-2.5 rounded-md border border-custom-half-gray focus:outline-none bg-custom-half-gray"
                />
              </div>

              <input
                type="text"
                placeholder="Your Subject"
                className="w-full p-2.5 rounded-md border border-custom-half-gray focus:outline-none bg-custom-half-gray"
              />
              {/* Textarea */}
              <textarea
                placeholder="Your Message"
                className="min-h-32 h-auto w-full p-2.5 rounded-md border border-custom-half-gray focus:outline-none bg-custom-half-gray"
              />

              {/* Button */}
              <button
                type="submit"
                className="primaryButton w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


    </main>
  );
};

export default ContactUs;
