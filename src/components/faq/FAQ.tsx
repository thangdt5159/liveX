import React, { useState } from "react";
import { FAQData } from "../constant";
import FAQItems from "./FAQItems";

const FAQ = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[489px] mx-auto pt-12 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[42px] font-bold leading-[50px] mt-[28px] mb-10">
            FAQ
          </h1>
        </div>
        {FAQData.map((item) => (
          <FAQItems data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
