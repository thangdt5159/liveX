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
    <div className="md:w-[410px] w-[60%] mx-auto">
      <h1 className="text-[42px] font-bold md:my-8 mb-4">Why Us?</h1>
      <div className="text-[13px] text-white/75 leading-4 mb-7 min-h-[64px] flex items-center">
        {tabContent}
      </div>
      <div className="md:grid md:grid-cols-2 mx-auto">
        {aboutUsData.map((item) => (
          <div
            key={item.id}
            className="md:flex items-center justify-center md:justify-start mb-[18px]"
          >
            <div className="bg-[#D98639] rounded-[3px] w-[3px] h-[18px] mr-2 hidden md:block"></div>
            <div
              className={`text-[13px] font-semibold cursor-pointer transition-all duration-500 ${
                activeTab === item.id && "text-[#D98639]"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </div>
            <div className="bg-[#D98639] rounded-[3px] w-[50px] h-[3px] mx-auto md:mr-2 md:hidden"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
