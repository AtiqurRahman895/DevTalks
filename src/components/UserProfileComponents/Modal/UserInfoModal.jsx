import React from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaBuilding } from "react-icons/fa";

const UserInfoModal = ({ userDetails }) => {
  // Initialize react-hook-form with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userDetails?.name || "",
      profession: userDetails?.profession || "",
      location: userDetails?.location || "",
      email: userDetails?.email || "",
      twitterName: userDetails?.twitterName || "",
      twitterLink: userDetails?.twitterLink || "",
      linkedinName: userDetails?.linkedinName || "",
      linkedinLink: userDetails?.linkedinLink || "",
      facebookName: userDetails?.facebookName || "",
      facebookLink: userDetails?.facebookLink || "",
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    // Add logic to save the updated details (e.g., API call)
    document.getElementById(`my_modal_${userDetails?.name}`).close(); // Close the modal
  };

  return (
    <>
      <dialog id={`my_modal_${userDetails?.name}`} className="modal">
        <div className="modal-box shadow-xl rounded-xl bg-black">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-gray-200 transition-colors">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center text-white mb-2">Edit Details</h3>
          {/* Divider */}
          <div className="border-b border-gray-600 my-4"></div>

          {/* Form data */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Profession */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Profession</label>
              <input
                type="text"
                {...register("profession", { required: "Profession is required" })}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                placeholder="Enter your profession"
              />
              {errors.profession && (
                <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-gray-400 text-lg" />
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-300 mb-1">Location</label>
                <input
                  type="text"
                  {...register("location", { required: "Location is required" })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                  placeholder="Enter your location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-400 text-lg" />
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            {/* organization */}
            <div className="flex items-center space-x-3">
              <FaBuilding className="text-gray-400 text-lg" />
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-300 mb-1">Organization</label>
                <input
                  type="text"
                  {...register("organization", {
                    required: "Organization is required"
                  })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                  placeholder="Enter your University or company"
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
                )}
              </div>
            </div>

            {/* Social Info Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Social Info</h4>

              {/* Twitter */}
              <div className="flex items-start space-x-3">
                <FaTwitter className="text-blue-400 text-lg mt-9" />
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Twitter Handle</label>
                    <input
                      type="text"
                      {...register("twitterName", {
                        pattern: {
                          value: /^[a-zA-Z0-9_]{1,15}$/,
                          message: "Invalid Twitter handle (e.g., username, max 15 characters)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your Twitter handle"
                    />
                    {errors.twitterName && (
                      <p className="text-red-500 text-sm mt-1">{errors.twitterName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Twitter Link</label>
                    <input
                      type="text"
                      {...register("twitterLink", {
                        pattern: {
                          value: /^(https:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/?)?$/,
                          message: "Invalid Twitter URL (e.g., https://twitter.com/username)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your Twitter URL"
                    />
                    {errors.twitterLink && (
                      <p className="text-red-500 text-sm mt-1">{errors.twitterLink.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-3">
                <FaLinkedin className="text-blue-600 text-lg mt-9" />
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">LinkedIn Username</label>
                    <input
                      type="text"
                      {...register("linkedinName", {
                        pattern: {
                          value: /^[a-zA-Z0-9-]+$/,
                          message: "Invalid LinkedIn username (e.g., username)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your LinkedIn username"
                    />
                    {errors.linkedinName && (
                      <p className="text-red-500 text-sm mt-1">{errors.linkedinName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">LinkedIn Link</label>
                    <input
                      type="text"
                      {...register("linkedinLink", {
                        pattern: {
                          value: /^(https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?)?$/,
                          message: "Invalid LinkedIn URL (e.g., https://linkedin.com/in/username)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your LinkedIn URL"
                    />
                    {errors.linkedinLink && (
                      <p className="text-red-500 text-sm mt-1">{errors.linkedinLink.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start space-x-3">
                <FaFacebook className="text-blue-500 text-lg mt-9" />
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Facebook Username</label>
                    <input
                      type="text"
                      {...register("facebookName", {
                        pattern: {
                          value: /^[a-zA-Z0-9.]+$/,
                          message: "Invalid Facebook username (e.g., username)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your Facebook username"
                    />
                    {errors.facebookName && (
                      <p className="text-red-500 text-sm mt-1">{errors.facebookName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1">Facebook Link</label>
                    <input
                      type="text"
                      {...register("facebookLink", {
                        pattern: {
                          value: /^(https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?)?$/,
                          message: "Invalid Facebook URL (e.g., https://facebook.com/username)",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
                      placeholder="Enter your Facebook URL"
                    />
                    {errors.facebookLink && (
                      <p className="text-red-500 text-sm mt-1">{errors.facebookLink.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-custom-primary text-white hover:bg-custom-half-primary px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
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