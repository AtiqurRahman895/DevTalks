import React from "react";

const AboutUsSolutionCenter = () => {
  return (
    <div
      className="h-[640px] relative flex lg:flex-row flex-col justify-center items-center lg:px-10"
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
        <div className=" flex flex-col text-left lg:w-[50%] w-full">
          <h3 className="mb-6">
            Get Coding Questions{" "}
            <strong className="text-custom-primary text-5xl ml-2">
              Answered
            </strong>{" "}
            Find{" "}
            <strong className="text-custom-primary text-5xl ml-2">
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
          className="w-[50%] h-96 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutUsSolutionCenter;
