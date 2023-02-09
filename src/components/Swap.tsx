import React from "react";

const Swap = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[489px] mx-auto py-12">
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="w-[470px]">
            <h1 className="text-[42px] font-bold leading-[50px] mt-[78px] mb-8">
              Swap
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Moviex Swap is an Automated Market Maker (AMM). It also serves a
              role as a decentralized exchange and helps our users in trading.
            </p>
            <button className="w-[150px] h-[42px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg font-semibold">
              Swap
            </button>
          </div>
          <div className="w-[566px] h-[284px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-3xl -rotate-[4.22deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
