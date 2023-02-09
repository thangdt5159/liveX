import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 py-[42px] w-[1488px] min-h-[570px] mx-auto">
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="w-[410px]">
            <h1 className="text-[42px] mt-[95px] mb-7 font-bold leading-[50px]">
              Get Paid For Watching Movies
            </h1>
            <p className="text-[13px] text-white/75 leading-4">
              Do simple things, watch the newest episode of the series, and get
              paid in $MVX. Kill two birds with one stone.
              <br /> Contract address:
              <br />
              0x2940f8263f49e46fd2E7Fb2e74b46A2a60F6E8E2
            </p>
            <div className="flex justify-between items-center mt-7">
              <button className="w-[150px] h-10 bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg font-sem">
                App
              </button>
              <div className="flex justify-between gap-3">
                <Image
                  src="/images/googlePlay.png"
                  width={116}
                  height={40}
                  alt=""
                  className="cursor-no-drop"
                />
                <Image
                  src="/images/appStore.png"
                  width={116}
                  height={40}
                  alt=""
                  className="cursor-no-drop"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[492px] justify-center grow">
            <Image
              src="/images/appImage1.png"
              alt=""
              width={500}
              height={500}
              className="translate-x-[480px] animate-bounceLeft"
            />
            <Image
              src="/images/appImage2.png"
              alt=""
              width={500}
              height={500}
              className="-translate-x-10 animate-bounceRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
