import React from "react";

// Constants for validation messages and patterns
const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email address",
};

const VALIDATION_PATTERNS = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const FormField = ({ label, name, register, errors, type = "text", placeholder, icon: Icon }) => (
  <div className={Icon ? "flex items-center space-x-3" : ""}>
    {Icon && <Icon className="text-gray-400 text-lg" />}
    <div className={Icon ? "flex-1" : ""}>
      <label className="block text-sm font-semibold text-gray-300 mb-1">{label}</label>
      {type === "textarea" ? (
        <textarea
          rows={8}
          {...register(name, { required: VALIDATION_MESSAGES.REQUIRED })}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          {...register(name, {
            required: VALIDATION_MESSAGES.REQUIRED,
            ...(type === "email" && {
              pattern: {
                value: VALIDATION_PATTERNS.EMAIL,
                message: VALIDATION_MESSAGES.INVALID_EMAIL,
              },
            }),
          })}
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all"
          placeholder={placeholder}
        />
      )}
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  </div>
);

export default FormField;
{
  /* Email */
}
{
  /* <div className="flex items-center space-x-3">
  <FaEnvelope className="text-gray-400 text-lg" />
  <div className="flex-1">
    <label className="block text-sm font-semibold text-gray-300 mb-1">
      Email
    </label>
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
</div>; */
}
