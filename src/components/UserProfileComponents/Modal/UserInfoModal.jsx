import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaBuilding,
} from "react-icons/fa";
import { secureAxios } from "../../../Hooks/useSecureAxios";
import { toast } from "react-toastify";
import FormField from "./FormField";
import SocialMediaField from "./SocialMediaField";

const UserInfoModal = ({ modalId, userDetails, setUserDetails }) => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      bio: "",
      profession: "",
      location: "",
      email: "",
      organization: "",
      twitterName: "",
      twitterLink: "",
      linkedinName: "",
      linkedinLink: "",
      facebookName: "",
      facebookLink: "",
    },
  });

  // Update form values when userDetails changes
  useEffect(() => {
    if (userDetails) {
      reset({
        name: userDetails.name || "",
        bio: userDetails.bio || "",
        profession: userDetails.profession || "",
        location: userDetails.location || "",
        email: userDetails.email || "",
        organization: userDetails.organization || "",
        twitterName: userDetails.twitterName || "",
        twitterLink: userDetails.twitterLink || "",
        linkedinName: userDetails.linkedinName || "",
        linkedinLink: userDetails.linkedinLink || "",
        facebookName: userDetails.facebookName || "",
        facebookLink: userDetails.facebookLink || "",
      });
    }
  }, [userDetails, reset]);

  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const res = await secureAxios.put(
        `/users/user/${userDetails.email}`,
        data
      );
      if (res.data.modifiedCount > 0) {
        setUserDetails((prev) => ({ ...prev, ...data }));
        toast.success("User Details Updated");
      } else {
        toast.info("No changes were made to the user details");
      }
      document.getElementById(`my_modal_${userDetails?.name}`).close(); // Close the modal
    } catch (error) {
      document.getElementById(`my_modal_${userDetails?.name}`).close();
      console.error("Error updating user:", error);
      toast.error("Failed to update user details");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box shadow-xl rounded-xl bg-black">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-gray-200 transition-colors">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center text-white mb-2">
            Edit Details
          </h3>
          {/* Divider */}
          <div className="border-b border-gray-600 my-4"></div>

          {/* Form data */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              label="Name"
              name="name"
              register={register}
              errors={errors}
              placeholder="Enter your name"
            />

            {/* Profession */}
            <FormField
              label="Profession"
              name="profession"
              register={register}
              errors={errors}
              placeholder="Enter your profession"
            />

            {/* Bio */}
            <FormField
              label="Bio"
              name="bio"
              register={register}
              errors={errors}
              type="textarea"
              placeholder="Enter your bio"
            />

            {/* Organization */}
            <FormField
              label="Organization"
              name="organization"
              register={register}
              errors={errors}
              placeholder="Enter your University or company"
              icon={FaBuilding}
            />

            {/* Location */}
            <FormField
              label="Location"
              name="location"
              register={register}
              errors={errors}
              placeholder="Enter your location"
              icon={FaMapMarkerAlt}
            />

            {/* Email */}
            <FormField
              label="Email"
              name="email"
              register={register}
              errors={errors}
              type="email"
              placeholder="Enter your email"
              icon={FaEnvelope}
            />

            {/* Social Info Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Social Info</h4>

              {/* Twitter */}
              <SocialMediaField
                platform="Twitter"
                icon={FaTwitter}
                register={register}
                errors={errors}
              />

              {/* LinkedIn */}
              <SocialMediaField
                platform="LinkedIn"
                icon={FaLinkedin}
                register={register}
                errors={errors}
              />

              {/* Facebook */}
              <SocialMediaField
                platform="Facebook"
                icon={FaFacebook}
                register={register}
                errors={errors}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                disabled={loader}
                type="submit"
                className="btn bg-custom-primary text-white hover:bg-custom-half-primary px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {loader? "Updating...." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserInfoModal;
