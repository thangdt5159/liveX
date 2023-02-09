import React from "react";
import { navbarItem } from "./constant";

const Partners = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[108px] mx-auto py-12 pt-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[42px] font-bold">Icon</h1>
            <div className="flex justify-end gap-2">
              <img
                src="/images/telegram.svg"
                alt=""
                className="w-[38px] h-[38px] cursor-pointer"
              />
              <img
                src="/images/twitter.svg"
                alt=""
                className="w-[38px] h-[38px] cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-white/75">
              © 2022 Moviex. All rights reserved.
            </div>
            <div className="flex justify-between gap-2 text-[13px] text-white/75">
              {navbarItem.map((item) => (
                <div
                  key={item.id}
                  className="hover:text-[#D98639] cursor-pointer transition-all duration-500"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
