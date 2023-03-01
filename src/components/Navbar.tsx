import Image from "next/image";
import React from "react";
import Button from "./common/Button";
import { navbarItem } from "./constant";

const Navbar = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] min-h-[110px] mx-auto flex">
        <div className="w-[90%] md:flex justify-between items-center mx-auto">
          <Image
            src="/images/navBlur.png"
            alt="LiveX"
            width={224}
            height={205}
            className="absolute -top-[122px] right-[133px]"
          />
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={200}
            className="object-contain h-[100px] cursor-pointer mx-auto"
          />
          <div className="flex justify-between font-bold text-[14px]">
            {navbarItem.map((item) => (
              <div
                key={item.id}
                className="hidden md:block md:mr-6 md:cursor-pointer md:transition-all md:duration-500 md:hover:text-[#D98639]"
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="md:w-[150px] md:h-[42px] w-[170px] h-[42px] text-[14px] mx-auto md:mx-0 md:my-6 mb-4">
            <Button title="Go To App" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
