import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Section1 = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 py-[42px] md:w-[1488px] w-[90%] min-h-[570px] mx-auto before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <div className="relative w-[90%] mx-auto md:flex justify-between text-center md:text-start">
          <div className="md:w-[410px]">
            <h1 className="text-[42px] md:mt-[95px] mb-7 font-bold leading-[50px]">
              Get Paid For Watching Movies
            </h1>
            <p className="text-[13px] text-white/75 leading-4">
              Do simple things, watch the newest episode of the series, and get
              paid in $LVX. Kill two birds with one stone.
              <br /> Contract address:
              <br />
              0x2940f8263f49e46fd2E7Fb2e74b46A2a60F6E8E2
            </p>
            <div className="flex justify-between items-center mt-7">
              <div className="md:w-[150px] md:h-[42px] hidden md:block">
                <Button title="App" />
              </div>
              <div className="flex justify-center md:justify-between gap-3 flex-grow">
                <Image
                  src="/images/googlePlay.png"
                  width={116}
                  height={40}
                  alt=""
                  className="cursor-no-drop h-[40px]"
                />
                <Image
                  src="/images/appStore.png"
                  width={116}
                  height={40}
                  alt=""
                  className="cursor-no-drop h-[40px]"
                />
              </div>
            </div>
            <div className="md:hidden w-[80%] mx-auto h-[40px] mt-4">
              <Button title="App" />
            </div>
          </div>
          <div className="relative flex md:w-[492px] md:justify-center grow bg-bgLava md:bg-none my-20 md:my-0 min-h-[300px] md:min-h-[0] bg-contain">
            <Image
              src="/images/bgLava.png"
              alt=""
              width={500}
              height={500}
              className="absolute md:left-[45%] w-[272px] h-[255px] md:w-[600px] md:h-[500px] hidden md:block"
            />
            <Image
              src="/images/appImage1.png"
              alt=""
              width={500}
              height={500}
              className="absolute md:left-[480px] animate-bouLeft"
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
