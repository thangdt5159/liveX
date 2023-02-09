import React from "react";
import { roadmapData } from "./constant";

const Roadmap = () => {
  return (
    <section className="border-b border-white/10">
      <div className="border-x border-white/10 w-[1488px] mx-auto">
        <h1 className="text-[42px] font-bold text-center my-6">Roadmap</h1>
        <table className="w-full text-center cursor-pointer">
          <thead>
            <tr className="uppercase bg-white/5 text-[22px] font-bold">
              <th className="border-x border-white/10 px-[10px] py-[17px] hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00]">
                phase 1
              </th>
              <th className="border-x border-white/10 hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00]">
                phase 2
              </th>
              <th className="border-x border-white/10 hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00]">
                phase 3
              </th>
              <th className="border-x border-white/10 hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00]">
                phase 4
              </th>
            </tr>
          </thead>
          <tbody>
            {roadmapData.map((item) => (
              <tr key={item.id} className="text-[18px] font-semibold">
                <td className="border-x border-white/10 border-t px-[10px] py-[20px] hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00] transition-all duration-500">
                  {item.phase1}
                </td>
                <td className="border-x border-white/10 border-t hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00] transition-all duration-500">
                  {item.phase2}
                </td>
                <td className="border-x border-white/10 border-t hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00] transition-all duration-500">
                  {item.phase3}
                </td>
                <td className="border-x border-white/10 border-t hover:bg-gradient-to-r hover:from-[#D98639] hover:to-[#FF3D00] transition-all duration-500">
                  {item.phase4}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Roadmap;
