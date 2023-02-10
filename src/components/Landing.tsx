import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Landing = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[110px] mx-auto pt-[80px] before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <Image
          src="/images/landingBlur1.png"
          alt=""
          width={236}
          height={180}
          className="hidden absolute top-[100px] -left-[233px]"
        />
        <Image
          src="/images/landingBlur2.png"
          alt=""
          width={251}
          height={259}
          className="hidden absolute top-[70px] -right-[80px]"
        />
        <Image
          src="/images/landingBlur3.png"
          alt=""
          width={275}
          height={283}
          className="hidden absolute top-[430px] left-[60px]"
        />
        <Image
          src="/images/landingBlur4.png"
          alt=""
          width={336}
          height={220}
          className="hidden absolute top-[360px] right-[90px]"
        />

        <div className="w-[90%] mx-auto relative">
          <div className="md:w-[55%] mx-auto text-center">
            <h1 className="text-[60px] font-bold leading-[60px] my-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D98639] via-[#FF3D00] to-[#D98639] animate-moveBg bg-[200%]">
              Watch Your Favourite Moview & Earn $MVX
            </h1>
            <p className="text-white/75 text-[15px] mb-4">
              Welcome to Moviex, where we explore the frontier of crypto and
              tech innovations. This is the DApp allowing you to chill, watch
              your favorite movie, and get paid in $MVX. Watch to Earn, baby!
            </p>
            <div className="md:w-[320px] w-full mx-auto text-xs font-semibold flex">
              <div className="md:w-[150px] md:h-[42px] w-[48%]">
                <Button title="Buy $MVX" />
              </div>
              <button className="w-[48%] h-[42px] rounded-lg ml-[4%] bg-gradient-to-r from-[#D98639] to-[#FF3D00]">
                <div className="border border-transparent bg-[#1f2227] h-[40px] w-[98%] leading-[38px] rounded-lg m-auto">
                  Watch Trailer
                </div>
              </button>
            </div>
          </div>
          <Image
            src="/images/landingImage.png"
            alt=""
            width={1600}
            height={1600}
            className="mt-[42px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
