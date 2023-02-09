import React, { useState } from "react";
import { FAQData } from "../constant";
import FAQItems from "./FAQItems";

const FAQ = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] min-h-[489px] mx-auto pt-12">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[42px] font-bold leading-[50px] mt-[60px] mb-10">
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
