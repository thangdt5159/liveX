import Image from "next/image";
import React from "react";
import { navbarItem } from "./constant";

const Partners = () => {
  const redirectToTw = () => {
    window.open("https://twitter.com/LiveXdefi");
  };

  const redirectToTele = () => {
    window.open("https://discord.gg/S8nt9MrUmq");
  };

  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[108px] mx-auto py-12 pt-5 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[6px] before:-left-[7px] before:absolute before:rotate-180 after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[6px] after:-right-[6px] after:absolute after:rotate-180">
        <div className="w-[90%] mx-auto hidden md:block">
          <div className="flex justify-between items-center">
            {/* <h1 className="text-[42px] font-bold">Icon</h1> */}
            <Image
              src="/images/logo.png"
              alt="LiveX"
              width={200}
              height={200}
              className="object-contain h-[100px] cursor-pointer"
            />
            <div className="flex justify-end gap-2">
              <Image
                src="/images/telegram.svg"
                alt="Telegram"
                width={48}
                height={48}
                className="w-[38px] h-[38px] cursor-pointer"
                onClick={redirectToTele}
              />
              <Image
                src="/images/twitter.svg"
                alt="Twitter"
                width={48}
                height={48}
                className="w-[38px] h-[38px] cursor-pointer"
                onClick={redirectToTw}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-white/75">
              © 2022 Moviex. All rights reserved.
            </div>
            <div className="md:flex justify-between gap-2 text-[13px] text-white/75">
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
        <div className="md:hidden text-center">
          <h1 className="text-[42px] font-bold">Icon</h1>
          <div className="flex justify-center gap-2 mb-2">
            <Image
              src="/images/telegram.svg"
              alt=""
              width={48}
              height={48}
              className="w-[38px] h-[38px] cursor-pointer"
              onClick={redirectToTele}
            />
            <Image
              src="/images/twitter.svg"
              alt=""
              width={48}
              height={48}
              className="w-[38px] h-[38px] cursor-pointer"
              onClick={redirectToTw}
            />
          </div>
          <div className="text-xs text-white/75">
            © 2023 LiveX. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
