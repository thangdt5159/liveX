import React from "react";
import AboutUsContent from "./AboutUsContent";

const AboutUs = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[414px] mx-auto py-[50px] flex">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <AboutUsContent />
          <div className="bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg w-[600px] h-[293px]"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
