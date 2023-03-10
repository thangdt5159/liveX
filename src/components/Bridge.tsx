import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Bridge = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[489px] mx-auto py-12 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        {/* <Image
          src="/images/landingBlur5.png"
          alt=""
          width={434}
          height={354}
          className="hidden md:block md:absolute md:top-[155px] md:right-[100px]"
        /> */}
        <div className="w-[90%] mx-auto text-center">
          <div className="">
            <h1 className="text-[42px] font-bold leading-[50px] md:mt-[78px] mb-8">
              Bridge
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Moviex Bridge provides cross-chain transactions which surely will
              simplify investing on BSC network where we are currently launching
              the token.
            </p>
            <div className="w-[150px] h-[42px] mx-auto">
              <Button title="Bridge" />
            </div>
          </div>
          {/* <div className="w-[306px] h-[159px] md:w-[784px] md:h-[406px] bg-white/75 rounded-lg z-10 flex justify-center items-center -rotate-[2.59deg] mx-auto mt-10 md:mt-0">
            <div className="bg-gradient-to-r from-[#D98639] to-[#FF3D00] w-[302px] h-[155px] md:w-[780px] md:h-[402px] rounded-lg"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Bridge;
