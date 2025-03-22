import React from 'react';

const SectionBanner = ({ title }) => {
  return (
    <div 
      className="text-center py-16 container bg-cover bg-center rounded-lg mb-8" 
      style={{ 
        backgroundImage: "url('/SectionBanner.jpg')", // Replace with your image name
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h3 className="font-bold text-white mb-4">{title}</h3>
      <p className=" sm:w-4/5 md:w-2/4 mx-auto text-white leading-relaxed">
        Home / About Us
      </p>
    </div>
  );
};

export default SectionBanner;
