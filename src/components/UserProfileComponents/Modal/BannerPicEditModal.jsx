import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import CoverImageInput from "../../CommonComponents/CoverImageInput";
import ProfileImageInput from "../../AuthenticationComponents/ProfileImageInput";
import { secureAxios } from "../../../Hooks/useSecureAxios";

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
        setImage(""); // Reset image state
        refetch(); // Refetch user data
        document.getElementById(modalId).close(); // Close modal
      } else {
        throw new Error("No changes were made to the image.");
      }
    } catch (error) {
      toast.error(`${TOAST_MESSAGES.ERROR}${error.message}`);
      setImage(""); // Reset image state on error
      document.getElementById(modalId).close(); // Close modal on error
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
        <div className="w-64 mx-auto mb-2">
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
            className={`btn bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
            aria-label="Save image"
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            )}
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleClose}
            className="btn bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300"
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