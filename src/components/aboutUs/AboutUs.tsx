import Image from "next/image";
import React from "react";
import AboutUsContent from "./AboutUsContent";

const AboutUs = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[414px] mx-auto py-[50px] flex before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[6px] before:-left-[7px] before:absolute before:rotate-180 after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[6px] after:-right-[6px] after:absolute after:rotate-180">
        <Image
          src="/images/whyBlur1.png"
          alt=""
          width={204}
          height={208}
          className="hidden md:block md:absolute md:-top-[100px] md:left-[500px]"
        />
        <div className="w-[90%] mx-auto md:flex justify-between items-center text-center md:text-start">
          <AboutUsContent />
          <div className="relative bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg w-[80%] mx-auto md:mx-0 md:w-[600px] md:h-[293px]">
            <Image
              src="/images/whyBlur2.png"
              alt=""
              width={418}
              height={482}
              className="md:absolute md:-top-[90px] md:-right-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
