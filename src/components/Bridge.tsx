import React from "react";

const Bridge = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[489px] mx-auto py-12">
        <div className="w-[90%] mx-auto flex justify-between">
          <div className="w-[470px]">
            <h1 className="text-[42px] font-bold leading-[50px] mt-[78px] mb-8">
              Bridge
            </h1>
            <p className="text-white/75 text-[13px] leading-4 mb-4">
              Moviex Bridge provides cross-chain transactions which surely will
              simplify investing on BSC network where we are currently launching
              the token.
            </p>
            <button className="w-[150px] h-[42px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-lg font-semibold">
              Bridge
            </button>
          </div>
          <div className="w-[784px] h-[406px] bg-gradient-to-r from-[#D98639] to-[#FF3D00] rounded-3xl -rotate-[2.59deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
