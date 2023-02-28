import Image from "next/image";
import React, { useState } from "react";
import { FAQData } from "./constant";

const FAQ = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[489px] mx-auto pt-12 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[42px] font-bold leading-[50px] mt-[28px] mb-10">
            FAQ
          </h1>
        </div>
        {FAQData.map((item) => (
          <div
            key={item.id}
            className="relative border-t border-white/10 px-[5%] pt-[22px] text-2xl font-bold cursor-pointer overflow-hidden"
            onClick={() => {
              if (active !== item.id) {
                setIsExpand(true);
              } else {
                setIsExpand(!isExpand);
              }
              setActive(item.id);
            }}
          >
            <div
              className={`relative mb-[17px] pr-10 ${
                isExpand &&
                active === item.id &&
                "text-transparent bg-clip-text bg-gradient-to-r from-[#D98639] via-[#FF3D00] to-[#D98639] animate-moveBg bg-[200%]"
              }`}
            >
              {item.title}
              <Image
                src="/images/down-arrow.png"
                alt=""
                width={20}
                height={20}
                className={`absolute right-0 top-[35%] ${
                  isExpand && active === item.id && "rotate-180"
                } transition-all select-none`}
              />
            </div>

            <div
              className={`pr-[10%] text-[15px] text-white/75 transition-all duration-500 ${
                isExpand && active === item.id && item.id !== 6
                  ? "h-[210px] md:h-[90px]"
                  : isExpand && active === item.id && item.id === 6
                  ? "h-[340px] md:h-[120px]"
                  : "h-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
