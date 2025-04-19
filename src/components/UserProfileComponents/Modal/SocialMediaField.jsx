/* eslint-disable no-unused-vars */
import React from "react";

// Constants for validation messages and patterns
const VALIDATION_MESSAGES = {
  // INVALID_TWITTER_HANDLE: "Invalid Twitter handle (e.g., username, max 15 characters)",
  INVALID_TWITTER_URL: "Invalid Twitter URL (e.g., https://twitter.com/username)",
  // INVALID_LINKEDIN_USERNAME: "Invalid LinkedIn username (e.g., username)",
  INVALID_LINKEDIN_URL: "Invalid LinkedIn URL (e.g., https://linkedin.com/in/username)",
  // INVALID_FACEBOOK_USERNAME: "Invalid Facebook username (e.g., username)",
  INVALID_FACEBOOK_URL: "Invalid Facebook URL (e.g., https://facebook.com/username)",
};

const VALIDATION_PATTERNS = {
  // TWITTER_HANDLE: /^[a-zA-Z0-9_]{1,15}$/,
  TWITTER_URL: /^(https:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/?)?$/,
  // LINKEDIN_USERNAME: /^[a-zA-Z0-9-]+$/,
  LINKEDIN_URL: /^(https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?)?$/,
  // FACEBOOK_USERNAME: /^[a-zA-Z0-9.]+$/,
  FACEBOOK_URL: /^(https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?)?$/,
};

const SocialMediaField = ({ platform, icon: Icon, register, errors }) => {
  const platformLower = platform.toLowerCase();


  return (
    <div className="flex items-start space-x-3">
      <Icon className="text-custom-primary text-lg mt-10" />
      <div className="flex-1 space-y-3">
        {/* <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            {platform} Handle
          </label>
          <input
            type="text"
            {...register(`${platformLower}Name`, {
              pattern: {
                value: VALIDATION_PATTERNS[`${platform.toUpperCase()}_USERNAME`],
                message: VALIDATION_MESSAGES[`INVALID_${platform.toUpperCase()}_USERNAME`],
              },
            })}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
            placeholder={`Enter your ${platform} handle`}
          />
          {errors[`${platformLower}Name`] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[`${platformLower}Name`].message}
            </p>
          )}
        </div> */}
        <div>
          <label className="block font-semibold text-custom-primary mb-1">
            {platform} Link
          </label>
          <input
            type="text"
            {...register(`${platformLower}Link`, {
              pattern: {
                value: VALIDATION_PATTERNS[`${platform.toUpperCase()}_URL`],
                message: VALIDATION_MESSAGES[`INVALID_${platform.toUpperCase()}_URL`],
              },
            })}
            className="w-full p-3 rounded-lg bg-custom-half-gray focus:outline-none transition-all"
            placeholder={`Enter your ${platform} URL`}
          />
          {errors[`${platformLower}Link`] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[`${platformLower}Link`].message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaField;