import React from "react";

const Banner = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[110px] mx-auto py-5 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[6px] before:-left-[7px] before:absolute before:rotate-180 after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[6px] after:-right-[6px] after:absolute after:rotate-180">
        <div className="overflow-hidden flex w-[98%] mx-auto bg-white/10 py-10">
          <div className="slide1 whitespace-nowrap px-1">
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner
          </div>
          <div className="slide2 whitespace-nowrap px-1">
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
