import React from "react";

const Staking = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[489px] mx-auto py-12">
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="w-[470px]">
            <h1 className="text-[42px] font-bold leading-[50px] mt-[78px] mb-8">
              Earn 3,04% Of Your Stake. Each Day.
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Buy $MVX tokens. Stake them in a specific pool. Earn 3,04% of the
              value of your stake for watching one 2-hour movie daily. Receive
              $MVX instantly.
            </p>
            <button className="w-[150px] h-[42px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg font-semibold">
              Stake Tokens
            </button>
          </div>
          <div className="w-[566px] h-[284px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
