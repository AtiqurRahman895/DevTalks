import React from "react";
import { FaPlay } from "react-icons/fa";

export default function AboutUsHighlight() {
  return (
    <div className="container flex lg::flex-row flex-col gap-20 md:px-10 lg:my-32 my-24">

      {/* title and title photo */}
      <div className="lg:w-[50%] w-full mt-4">
        <h3 className="font-bold border-l-8 border-custom-primary pl-4 mb-6">
          Connecting Developers, Sharing Knowledge, and Building a Stronger
          <strong className="text-custom-primary text-4xl ml-2">
            Tech Community
          </strong>
        </h3>
        <img
          src="/AboutUs1.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>

      {/* description and users, questions */}
      <div className="lg:w-[50%] w-full">
        {/* two image side by side */}
        <div className="flex lg:flex-row flex-col items-center gap-6">
          <img
            src="/AboutUs2.jpg"
            alt=""
            className="w-full h-48 rounded-xl object-cover"
          />
          <img
            src="/AboutUs3.jpg"
            alt=""
            className="w-full h-48 rounded-xl object-cover"
          />
        </div>

        {/* description */}
        <p className="pt-16 text-base text-gray-300 tracking-wider">
          Our platform is built to connect developers, help them solve problems,
          and share knowledge. From coding enthusiasts to experienced engineers,
          we’ve built a community where everyone can grow and contribute.
        </p>

        {/* Displays total questions, answers, and active users for platform stats. */}
        <div className="mt-6 grid md:grid-cols-3 grid-cols-2 gap-3">
          <div>
            <h3 className="font-extrabold text-indigo-600">1M+</h3>
            <p className="">Questions Asked</p>
          </div>
          <div>
            <h3 className="font-extrabold text-indigo-600">500K+</h3>
            <p>Expert Answers</p>
          </div>
          <div>
            <h3 className="font-extrabold text-indigo-600">150+</h3>
            <p>Countries Represented</p>
          </div>
        </div>

        {/* watch intro */}
        <div className="flex items-center gap-4 mt-8">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src="https://avatarfiles.alphacoders.com/343/thumb-1920-343061.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://miro.medium.com/v2/resize:fit:1024/1*BEY7PZ3z0p6hxKLjYRdyvw.png" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://i.pinimg.com/originals/73/d3/45/73d3450c1edf0bfa9fb4f7efbd229834.jpg" />
            </div>
          </div>
          </div>
          <FaPlay className="text-4xl border-2 border-custom-primary rounded-full cursor-pointer p-2" />
          <h5>Watch Intro</h5>
        </div>
      </div>
    </div>
  );
}
