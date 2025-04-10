import React from "react";

const NothingProfile = ({title}) => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full bg-custom-half-gray rounded-lg shadow-md p-6">
      <p className="text-lg font-bold text-custom-gray">
         {title}
      </p>
    </div>
  );
};

export default NothingProfile;
