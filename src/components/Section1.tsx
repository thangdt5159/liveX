import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Section1 = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 py-[42px] md:w-[1488px] w-[90%] md:min-h-[570px] mx-auto before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="md:w-[410px]">
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
              <div className="md:w-[150px] md:h-[42px]">
                <Button title="App" />
              </div>
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
          <div className="relative flex md:w-[492px] justify-center grow">
            <Image
              src="/images/bgLava.png"
              alt=""
              width={500}
              height={500}
              className="absolute left-[45%]"
            />
            <Image
              src="/images/appImage1.png"
              alt=""
              width={500}
              height={500}
              className="absolute left-[480px] animate-bouLeft"
            />
            <Image
              src="/images/appImage2.png"
              alt=""
              width={500}
              height={500}
              className="absolute -right-10 animate-bouRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
