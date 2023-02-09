import React, { useState } from "react";
import { FAQData } from "../constant";

const FAQItems = ({ data }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div>
      <div
        className="border-t border-white/10 px-[5%] pt-[22px] pb-[17px] text-2xl font-bold cursor-pointer flex justify-between items-center"
        onClick={handleClick}
      >
        {data.title}
        <img
          src="/images/down-arrow.png"
          alt=""
          className={`${isExpand && "rotate-180"} transition-all select-none`}
        />
      </div>
      {isExpand && (
        <div className="pl-[5%] pr-[10%] text-[15px] text-white/75 pb-6">
          {data.content}
        </div>
      )}
    </div>
  );
};

export default FAQItems;
