import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const ProductCard = ({ card }) => {
  return (
    <div className="bg-custom-half-primary text-center flex flex-col items-center gap-5 rounded-full py-12 duration-300 hover:bg-custom-primary hover:scale-105 group cursor-pointer">
      {/* Icon */}
      <span className="text-7xl">{card.icon}</span>

      {/* Subheading */}
      <h5 className="tracking-[5px]">{card.subheading}</h5>

      {/* Arrow with rotation on hover */}
      <span className="text-4xl transform transition-transform duration-300 -rotate-45 group-hover:rotate-0">
        <MdArrowRightAlt />
      </span>
    </div>
  );
};

export default ProductCard;
