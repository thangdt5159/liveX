import Image from "next/image";
import React from "react";
import { roadmapData, roadmapDataMb } from "./constant";

const Roadmap = () => {
  const titleData = [
    {
      id: 1,
      title: "phase 1",
    },
    {
      id: 2,
      title: "phase 2",
    },
    {
      id: 3,
      title: "phase 3",
    },
    {
      id: 4,
      title: "phase 4",
    },
  ];

  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] mx-auto pt-6 before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[6px] before:-left-[7px] before:absolute before:rotate-180 after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[6px] after:-right-[6px] after:absolute after:rotate-180">
        <Image
          src="/images/roadmapBlur1.png"
          alt=""
          width={251}
          height={209}
          className="absolute md:top-12 -left-[100px]"
        />
        <Image
          src="/images/roadmapBlur2.png"
          alt=""
          width={309}
          height={288}
          className="hidden md:absolute md:top-[470px] md:left-[580px]"
        />
        <h1 className="text-[42px] font-bold text-center mb-6">Roadmap</h1>
        <table className="hidden md:table w-full text-center cursor-pointer relative">
          <thead>
            <tr className="uppercase bg-white/5 text-[22px] font-bold">
              {titleData.map((item) => (
                <th
                  key={item.id}
                  className="border-x border-white/10 px-[10px] py-[17px] relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500"
                >
                  <span className="relative">{item.title}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roadmapData.map((item) => (
              <tr key={item.id} className="text-[18px] font-semibold">
                <td className="border-x border-white/10 border-t px-[10px] py-[20px] relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500">
                  <span className="relative">{item.phase1}</span>
                </td>
                <td className="border-x border-white/10 border-t relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500">
                  <span className="relative">{item.phase2}</span>
                </td>
                <td className="border-x border-white/10 border-t relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500">
                  <span className="relative">{item.phase3}</span>
                </td>
                <td className="border-x border-white/10 border-t relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500">
                  <span className="relative">{item.phase4}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:hidden">
          {roadmapDataMb.map((item) => (
            <div
              key={item.id}
              className={`${
                (item.title === "phase 1" ||
                  item.title === "phase 2" ||
                  item.title === "phase 3" ||
                  item.title === "phase 4") &&
                "uppercase bg-white/5"
              } border-x border-white/10 border-t px-[10px] py-[14px] relative before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:opacity-0 before:bg-gradient-to-r before:from-[#D98639] before:to-[#FF3D00] hover:before:opacity-100 before:transition-all before:duration-500 text-center`}
            >
              <span
                className={`relative ${
                  (item.title === "phase 1" ||
                    item.title === "phase 2" ||
                    item.title === "phase 3" ||
                    item.title === "phase 4") &&
                  "text-[22px] font-bold"
                } text-[18px] font-semibold`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
