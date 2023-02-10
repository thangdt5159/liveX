import React from "react";

const Button = ({ title }: any) => {
  return (
    <button className="w-full h-full font-semibold rounded-lg bg-gradient-to-r from-[#D98639] to-[#FF3D00] relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-100 before:bg-gradient-to-r before:from-[#FF3D00] before:to-[#D98639] before:rounded-lg before:transition-all before:duration-500 hover:before:opacity-0">
      <span className="relative">{title}</span>
    </button>
  );
};

export default Button;
