import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaOrcid, FaLinkedin, FaTwitter } from "react-icons/fa";

const UserInfoModal = ({ userDetails }) => {
  return (
    <>
      <dialog id={`my_modal_${userDetails?.name}`} className="modal">
        {/* Increase the width of the modal-box using max-w-lg or max-w-xl */}
        <div className="modal-box max-w-lg bg-black text-white">
          <form method="dialog">
            {/* If there is a button in form, it will close the modal */}
            <button className="btn btn-base btn-circle btn-ghost absolute right-2 top-3 text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl text-center">Edit Details</h3>
          {/* Divider */}
          <div className="border-b border-gray-600 my-4"></div>

          {/* Form data */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            {/* Profession */}
            <div>
              <label className="block text-sm font-medium mb-1">Profession</label>
              <input
                type="text"
                name="profession"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your profession"
              />
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* ORCID */}
            <div className="flex items-center space-x-2">
              <FaOrcid className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">ORCID</label>
                <input
                  type="text"
                  name="orcid"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your ORCID URL"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">LinkedIn</label>
                <input
                  type="text"
                  name="linkedin"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your LinkedIn URL"
                />
              </div>
            </div>

            {/* Twitter */}
            <div className="flex items-center space-x-2">
              <FaTwitter className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Twitter handle"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserInfoModal;