import Image from "next/image";
import React from "react";
import { navbarItem } from "./constant";

const Navbar = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[110px] mx-auto flex">
        <div className="w-[90%] flex justify-between items-center mx-auto">
          <h1>ICON</h1>
          <div className="flex justify-between font-bold">
            {navbarItem.map((item) => (
              <div
                key={item.id}
                className="mr-6 cursor-pointer transition-all duration-500 hover:text-[#D98639]"
              >
                {item.title}
              </div>
            ))}
          </div>
          <button className="w-[150px] h-[42px] font-semibold rounded-lg bg-gradient-to-r from-[#D98639] to-[#FF3D00]">
            Go To App
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
