import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./FontAwesome";
const Icons = () => {
  return (
    <div className="flex gap-3">
      <div>
        <FaHeart className="hover:text-red-300 text-xl" />
      </div>
      <div className="relative">
        <FaShoppingCart className="hover:text-red-300 text-xl" />
        <span className="absolute -top-4 -right-2 bg-red-600 text-white rounded-full p-0.5">
          0
        </span>
      </div>
    </div>
  );
};

export default Icons;
