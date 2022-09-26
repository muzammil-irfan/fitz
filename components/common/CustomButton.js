import React from "react";
import BsArrowRightShort from 'react-icons/bs';

export default function CustomButton({ children, arrow, className }) {
  return (
    <button
      className={`px-8  py-2 yellow-background ${
        arrow && "flex items-center text-xs"
      } ${className}`}
    >
      {children}
    </button>
  );
}


