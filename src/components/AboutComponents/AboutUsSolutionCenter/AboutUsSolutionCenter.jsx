import React from "react";

const AboutUsSolutionCenter = () => {
  return (
    <div
      className="lg:h-[640px] relative flex lg:flex-row flex-col justify-center items-center lg:px-10 md:px-7 px-2 lg:py-0 py-12"
      style={{
        backgroundImage: "url('/AboutUs4.jpg')", // Replace with your image name
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* text and image  */}
      <div className="relative flex flex-col lg:flex-row">
        {/* text and description */}
        <div className="flex flex-col text-left lg:w-[50%] w-full">
          <h3 className="mb-6">
            Get Coding Questions{" "}
            <strong className="text-custom-primary">
              Answered
            </strong>{" "}
            Find{" "}
            <strong className="text-custom-primary">
              Solutions
            </strong>{" "}
            Fast and Efficient
          </h3>
          <p className="mb-6 text-base text-gray-300 tracking-wider">
            Discover a thriving hub designed to empower you—whether you're
            seeking answers, solving challenges, or unlocking your true
            potential. Together, we’re building a collaborative environment that
            transforms knowledge into action, creating a resource where everyone
            contributes to growth and success.
          </p>
          <div className="flex gap-4">
            <button className="primaryButton">Join</button>
            <button className="outlineButton">Learn more</button>
          </div>
        </div>

        <img
          src="/AboutUs5.jpg"
          alt=""
          className="lg:w-[50%] w-full lg:mt-0 mt-8 h-96 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutUsSolutionCenter;
