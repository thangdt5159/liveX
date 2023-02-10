import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Swap = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[489px] mx-auto py-12 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <Image
          src="/images/landingBlur5.png"
          alt=""
          width={434}
          height={354}
          className="absolute top-[85px] right-[230px]"
        />
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="md:w-[470px]">
            <h1 className="text-[42px] font-bold leading-[50px] mt-[78px] mb-8">
              Swap
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Moviex Swap is an Automated Market Maker (AMM). It also serves a
              role as a decentralized exchange and helps our users in trading.
            </p>
            <div className="md:w-[150px] md:h-[42px]">
              <Button title="Swap" />
            </div>
          </div>
          <div className="md:w-[540px] md:h-[403px] bg-white/75 rounded-3xl -rotate-[4.22deg] z-10 flex justify-center items-center">
            <div className="bg-gradient-to-r from-[#D98639] to-[#FF3D00] md:w-[536px] md:h-[399px] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
