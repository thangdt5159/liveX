import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Staking = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[489px] mx-auto py-12 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <Image
          src="/images/landingBlur5.png"
          alt=""
          width={543}
          height={443}
          className="hidden absolute top-[85px] right-[30px]"
        />
        <Image
          src="/images/landingBlur5.png"
          alt=""
          width={543}
          height={443}
          className="hidden absolute top-[21px] right-[175px]"
        />
        <div className="w-[90%] mx-auto ">
          <div className="w-[80%] mx-auto text-center">
            <h1 className="text-[42px] font-bold leading-[50px] md:mt-[78px] mb-8">
              Earn 3,04% Of Your Stake. Each Day.
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Buy $LVX tokens. Stake them in a specific pool. Earn 3,04% of the
              value of your stake for watching one 2-hour movie daily. Receive
              $LVX instantly.
            </p>
            <div className="w-[150px] h-[42px] mx-auto md:-auto-0">
              <Button title="Stake Tokens" />
            </div>
          </div>
          {/* <div className="w-[300px] h-[150px] md:w-[566px] md:h-[284px] bg-white/75 rounded-lg z-10 flex justify-center items-center mx-auto mt-10">
            <div className="bg-gradient-to-r from-[#D98639] to-[#FF3D00] md:w-[562px] w-[296px] h-[146px] rounded-lg"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Staking;
