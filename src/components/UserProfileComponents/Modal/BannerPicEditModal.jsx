import React, { useState } from "react";
import CoverImageInput from "../../CommonComponents/CoverImageInput";
import { secureAxios } from "../../../Hooks/useSecureAxios";
import { toast } from "react-toastify";

const BannerPicEditModal = ({ modalId, userEmail, refetch }) => {
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSave = async () => {
    try {
      setLoader(true);
      const res = await secureAxios.put(`/users/user/${userEmail}`, {
        coverImage: image,
      });
      if (res.data.modifiedCount > 0) {
        toast.success("Cover image updated successfully!");
        document.getElementById(modalId).close();
        setImage("")
        refetch();
      }
    } catch (err) {
      setImage("")
      document.getElementById(modalId).close();
      toast.error("Failed to update cover image: " + err.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-gray-800 text-white shadow-xl rounded-lg max-w-md w-full overflow-hidden">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-white transition-colors">
              ✕
            </button>
          </form>

          {/* Modal Header */}
          <h3 className="font-bold text-2xl text-center text-gray-100 mb-4">
            Edit Banner Image
          </h3>

          {/* Divider */}
          <div className="divider divide-gray-300 w-3/4 mx-auto mb-6">
          </div>

          {/* Image Upload Section */}
          <div className="w-64 ml-40 mb-2">
            <CoverImageInput image={image} setImage={setImage} />
          </div>
          {!image && <p className="text-sm text-gray-400 text-center mb-6">Upload New Image</p>}
          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSave}
              className={`btn bg-custom-half-primary text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 ${
                loader ? "loading" : ""
              }`}
              disabled={loader}
            >
              {loader ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => document.getElementById(modalId).close()}
              className="btn bg-custom-half-gray text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BannerPicEditModal;