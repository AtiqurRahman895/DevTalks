import React from "react";

const AboutUsSolutionCenter = () => {
  return (
    <section
      className="mb-6 h-auto relative bg-fixed"
      style={{
        backgroundImage: "url('/AboutUs4.jpg')", // Replace with your image name
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="container">
          <div className="py-12 relative flex flex-col lg:flex-row gap-8">
            {/* text and description */}
            <div className="lg:flex-1 w-full space-y-4">
              <h3 className="">
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
              <p className="text-base tracking-wider">
                Discover a thriving hub designed to empower you—whether you're
                seeking answers, solving challenges, or unlocking your true
                potential. Together, we're building a collaborative environment that
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
              className="lg:w-1/2 w-full object-cover rounded-lg"
            />
          </div>
      </div>
    </section>
  );
};

export default AboutUsSolutionCenter;
