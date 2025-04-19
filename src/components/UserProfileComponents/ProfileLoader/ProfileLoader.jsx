import React from "react";

// Skeleton Loader Component for Profile Page
const ProfileSkeletonLoader = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        {/* Banner Section */}
        <div className="relative h-48 bg-gray-800 shimmer rounded-lg">
          {/* Edit Button Placeholder */}
          <div className="absolute top-2 right-2 w-16 h-8 bg-gray-700 shimmer rounded"></div>
        </div>

        {/* Profile Picture and Tabs Section */}
        <div className="flex -mt-16">
          {/* Profile Picture */}
          <div className="w-32 h-32 bg-gray-700 shimmer rounded-full border-4 border-gray-900"></div>

          {/* Tabs (Questions, Answers, Badges) */}
          <div className="flex-1 flex justify-center space-x-4 mt-16">
            <div className="w-24 h-8 bg-gray-700 shimmer rounded"></div>
            <div className="w-24 h-8 bg-gray-700 shimmer rounded"></div>
            <div className="w-24 h-8 bg-gray-700 shimmer rounded"></div>
          </div>

          {/* Message and Add Friend Buttons */}
          <div className="flex space-x-2 mt-16">
            <div className="w-24 h-8 bg-gray-700 shimmer rounded"></div>
            <div className="w-24 h-8 bg-gray-700 shimmer rounded"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex mt-6">
          {/* Left: Bio Section */}
          <div className="w-1/3 pr-4">
            {/* Name */}
            <div className="w-3/4 h-8 bg-gray-700 shimmer rounded mb-2"></div>
            {/* Profession */}
            <div className="w-1/2 h-6 bg-gray-700 shimmer rounded mb-4"></div>
            {/* Bio Text */}
            <div className="w-full h-4 bg-gray-700 shimmer rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-700 shimmer rounded mb-2"></div>
            <div className="w-5/6 h-4 bg-gray-700 shimmer rounded mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-700 shimmer rounded mb-4"></div>
          </div>

          {/* Right: Activity Section (Questions) */}
          <div className="w-2/3 pl-4">
            {/* Question Item */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="w-3/4 h-6 bg-gray-700 shimmer rounded mb-2"></div>
              <div className="w-1/4 h-4 bg-gray-700 shimmer rounded mb-2"></div>
              <div className="flex space-x-2">
                <div className="w-16 h-6 bg-gray-700 shimmer rounded"></div>
                <div className="w-16 h-6 bg-gray-700 shimmer rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Shimmer Animation */}
      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, #2d3748 25%, #4a5568 50%, #2d3748 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileSkeletonLoader;