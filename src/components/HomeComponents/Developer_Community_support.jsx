import React from 'react';
import developer_img from '../../assets/developer_support.jpg'
import { FaCube, FaCubes } from 'react-icons/fa';

const Developer_Community_support = () => {
    return (
        <div className='container'>
            <div className="bg-black text-white py-16  rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Unlock Your Potential: Join Our Developer Community Today!
          </h2>
          <p className="text-gray-300 mt-4">
            Become part of a vibrant community where developers support each other.
            Gain insights on a variety of programming topics and enhance your skills.
          </p>

          {/* Features Section */}
          <div className="mt-6 space-y-4 flex justify-between items-center">
            <div className="flex items-start flex-col gap-4">
              <FaCube className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-lg font-semibold">Peer Support</h3>
                <p className="text-gray-400">
                  Connect with fellow developers who share your challenges and triumphs.
                </p>
              </div>
            </div>
            <div className="flex items-start flex-col gap-4">
              <FaCubes className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-lg font-semibold">Diverse Topics</h3>
                <p className="text-gray-400">
                  Explore a vast array of programming subjects tailored to your interests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={developer_img}
            alt="Developer Community support"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Developer_Community_support;