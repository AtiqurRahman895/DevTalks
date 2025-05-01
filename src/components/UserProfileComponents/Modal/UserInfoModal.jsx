import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../../Provider/AuthProvider";

const UserInfoModal = ({ openModal, setOpenModal, userDetails, refetch }) => {
  const [loader, setLoader] = useState(false);
  const { updateUserProfile, user } = useContext(AuthContext);
  
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
      // twitterName: "",
      twitterLink: "",
      // linkedinName: "",
      linkedinLink: "",
      // facebookName: "",
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
        // twitterName: userDetails.twitterName || "",
        twitterLink: userDetails.twitterLink || "",
        // linkedinName: userDetails.linkedinName || "",
        linkedinLink: userDetails.linkedinLink || "",
        // facebookName: userDetails.facebookName || "",
        facebookLink: userDetails.facebookLink || "",
      });
    }
  }, [userDetails, reset]);

  const getUsernameFromSocialLink = async (link) => {
    try {
      // Ensure the URL starts with a protocol
      // console.log(link)
      const fixedLink = await link.startsWith("http") ? link : `https://${link}`;
      const url = new URL(fixedLink);
      const username = url.pathname.replace("/", "").trim();
      return username;
    } catch (error) {
      return null;
    }
  };

  const onSubmit = async (data) => {
    console.log(data.facebookLink)
    const twitterName= await getUsernameFromSocialLink(data.twitterLink) || ""
    const linkedinName= await getUsernameFromSocialLink(data.linkedinLink) || ""
    const facebookName= await getUsernameFromSocialLink(data.facebookLink) || ""

    const socialUsernames={
      twitterName, linkedinName, facebookName
    }

    data={...data,...socialUsernames}
    try {
      setLoader(true);
      const res = await secureAxios.put(
        `/users/user/${userDetails.email}`,
        data
      );
      if (res.data.modifiedCount > 0) {
        refetch();
        await updateUserProfile(data.name, user?.photoURL);
        toast.success("User Details Updated");
      } else {
        toast.info("No changes were made to the user details");
      }
      setOpenModal(false)
    } catch (error) {
      setOpenModal(false)
      console.error("Error updating user:", error);
      toast.error("Failed to update user details");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <dialog className="modal" open={openModal} >
        <div className="modal-box shadow-xl rounded-xl bg-white text-black hide-scrollbar border border-custom-gray">
          <form method="dialog">
            {/* Close button */}
            <button onClick={()=>setOpenModal(false)} className="btn btn-circle absolute right-3 top-3 hover:text-gray-200 transition-colors">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center mb-2">
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
                className="primaryButton hover:bg-custom-half-primary hover:text-custom-primary"
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
