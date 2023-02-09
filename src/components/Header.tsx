import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[110px] mx-auto pt-[80px]">
        <div className="w-[90%] mx-auto relative">
          <div className="w-[55%] mx-auto text-center">
            <h1 className="text-[60px] font-bold leading-[60px] my-10">
              Watch Your Favourite Moview & Earn $MVX
            </h1>
            <p className="text-white/75 text-[15px] mb-4">
              Welcome to Moviex, where we explore the frontier of crypto and
              tech innovations. This is the DApp allowing you to chill, watch
              your favorite movie, and get paid in $MVX. Watch to Earn, baby!
            </p>
            <div className="w-[320px] mx-auto text-xs font-semibold">
              <button className="w-[48%] h-[42px] rounded-lg bg-gradient-to-r from-[#D98639] to-[#FF3D00]">
                Buy $MVX
              </button>
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
            // sizes="100vw"
            width={1600}
            height={1600}
            // fill
            // objectFit="contain"
            className="mt-[42px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
