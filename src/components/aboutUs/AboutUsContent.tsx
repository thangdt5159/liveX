import React, { useEffect, useState } from "react";
import { aboutUsData } from "../constant";

const AboutUsContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabContent, setTabContent] = useState(
    "The core Team of Moviex has extensive experience in the world of DeFi thanks to which we do not make newbie mistakes and the project will be carried on properly and to the unavoidable success."
  );

  const handleClick = (item: any) => {
    setActiveTab(item.id);
    setTabContent(item.content);
  };

  return (
    <div className="w-[410px]">
      <h1 className="text-[42px] font-bold my-8">Why Us?</h1>
      <div className="text-[13px] text-white/75 leading-4 mb-7">
        {tabContent}
      </div>
      <div className="grid grid-cols-2">
        {aboutUsData.map((item) => (
          <div key={item.id} className="flex items-center mb-[18px]">
            <div className="bg-[#D98639] rounded-[3px] w-[3px] h-[18px] mr-2"></div>
            <div
              className={`text-[13px] font-semibold cursor-pointer transition-all duration-500 ${
                activeTab === item.id && "text-[#D98639]"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
