import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const ProductCard = ({ card }) => {
  return (
    <div className="bg-custom-half-primary text-white flex flex-col justify-center items-center text-center rounded-full py-20 transition-all duration-300 ease-in-out hover:bg-custom-primary hover:scale-105 group cursor-pointer">
      {/* Icon */}
      <span className="text-white text-[90px] mb-8">{card.icon}</span>

      {/* Subheading */}
      <h5 className="tracking-[5px] mb-8">{card.subheading}</h5>

      {/* Title */}
      <h4 className="break-words w-64 mb-6">{card.title}</h4>

      {/* Arrow with rotation on hover */}
      <span className="text-[60px] transform transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0">
      <MdArrowRightAlt />
      </span>
    </div>
  );
};

export default ProductCard;
