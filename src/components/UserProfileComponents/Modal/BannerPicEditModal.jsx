import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import CoverImageInput from "../../CommonComponents/CoverImageInput";
import ProfileImageInput from "../../AuthenticationComponents/ProfileImageInput";
import { secureAxios } from "../../../Hooks/useSecureAxios";
import Loading from "../../AuthenticationComponents/Loading";

// Constants for better readability and maintainability
const IMAGE_TYPES = {
  COVER: "coverImage",
  PROFILE: "photoURL",
};

const TOAST_MESSAGES = {
  SUCCESS: "Image updated successfully!",
  ERROR: "Failed to update image: ",
  NO_IMAGE: "Please upload an image first.",
};

const BannerPicEditModal = ({ modalId, userEmail, refetch, isProfileImage }) => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle image save with error handling and toast notifications
  const handleSave = useCallback(async () => {
    if (!image) {
      toast.error(TOAST_MESSAGES.NO_IMAGE);
      return;
    }

    setIsLoading(true);
    try {
      const imageField = isProfileImage ? IMAGE_TYPES.PROFILE : IMAGE_TYPES.COVER;
      const response = await secureAxios.put(`/users/user/${userEmail}`, {
        [imageField]: image,
      });

      if (response.data.modifiedCount > 0) {
        toast.success(TOAST_MESSAGES.SUCCESS);
        setImage(""); 
        refetch(); 
        document.getElementById(modalId).close(); 
      } else {
        throw new Error("No changes were made to the image.");
      }
    } catch (error) {
      toast.error(`${TOAST_MESSAGES.ERROR}${error.message}`);
      setImage(""); 
      document.getElementById(modalId).close();
    } finally {
      setIsLoading(false);
    }
  }, [image, userEmail, isProfileImage, refetch, modalId]);

  // Handle modal close
  const handleClose = useCallback(() => {
    document.getElementById(modalId).close();
  }, [modalId]);

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-gray-800 text-white shadow-xl rounded-lg max-w-md w-full overflow-hidden">
        {/* Close Button */}
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </form>

        {/* Modal Header */}
        <h3 className="font-bold text-2xl text-center text-gray-100 mb-4">
          {isProfileImage ? "Edit Profile Image" : "Edit Banner Image"}
        </h3>

        {/* Divider */}
        <div className="divider divide-gray-300 w-3/4 mx-auto mb-6"></div>

        {/* Image Upload Section */}
        <div className={`w-64 ${isProfileImage? "mx-auto" : "ml-40"} mb-2`}>
          {isProfileImage ? (
            <ProfileImageInput image={image} setImage={setImage} />
          ) : (
            <CoverImageInput image={image} setImage={setImage} />
          )}
        </div>
        {!image && (
          <p className="text-sm text-gray-400 text-center mb-6">
            Upload New Image
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSave}
            className={`btn bg-custom-primary hover:bg-custom-half-primary text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
            aria-label="Save image"
          >
            {isLoading && (
              <Loading/>
            )}
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleClose}
            className="btn bg-custom-primary hover:bg-custom-half-primary text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300"
            disabled={isLoading}
            aria-label="Cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

// PropTypes for type checking
BannerPicEditModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired,
  isProfileImage: PropTypes.bool,
};

export default BannerPicEditModal;