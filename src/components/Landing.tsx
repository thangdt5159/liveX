import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./common/Button";

const Landing = () => {
  const img1Ref = useRef<any>(null);
  const img2Ref = useRef<any>(null);
  const [mousePos, setMousePos] = useState<any>({});

  useEffect(() => {
    const followingImg1 = img1Ref.current;
    const followingImg2 = img2Ref.current;

    const handleMouseMoving = (e: any) => {
      followingImg1.style.transform = `translate(${e.clientX / 50}px,${
        e.clientY / 50
      }px)`;
      followingImg2.style.transform = `translate(-${e.clientX / 50}px,-${
        e.clientY / 50
      }px)`;
    };

    window.addEventListener("mousemove", handleMouseMoving);

    return () => window.removeEventListener("mousemove", handleMouseMoving);
  }, [mousePos]);

  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 md:w-[1488px] w-[90%] md:min-h-[110px] mx-auto md:pt-[80px] pt-[10px] before:bg-cornerTriangle before:w-[12px] before:h-[11px] before:bg-no-repeat before:bg-contain before:-top-[5px] before:-left-[6px] before:absolute after:bg-cornerTriangle after:w-[12px] after:h-[11px] after:bg-no-repeat after:bg-contain after:-top-[5px] after:-right-[7px] after:absolute">
        <Image
          src="/images/landingBlur1.png"
          alt=""
          width={236}
          height={180}
          className="absolute top-[100px] right-0 md:-left-[233px]"
        />
        <Image
          src="/images/landingBlur2.png"
          alt=""
          width={251}
          height={259}
          className="absolute top-[70px] right-0 md:-right-[80px]"
        />
        <Image
          src="/images/landingBlur3.png"
          alt=""
          width={275}
          height={283}
          className="hidden md:block absolute top-[45%] left-[100px]"
          ref={img1Ref}
        />
        <Image
          src="/images/landingBlur4.png"
          alt=""
          width={336}
          height={220}
          className="hidden md:block absolute top-[40%] right-[120px]"
          ref={img2Ref}
        />

        <div className="w-[90%] mx-auto relative">
          <div className="md:w-[55%] mx-auto text-center">
            <h1 className="uppercase text-[42px] leading-[46px] md:text-[60px] font-bold md:leading-[60px] md:my-10 my-7 text-transparent bg-clip-text bg-gradient-to-r from-[#D98639] via-[#FF3D00] to-[#D98639] animate-moveBg bg-[200%]">
              Create content and earn $LVX!
            </h1>
            <p className="text-white/75 md:text-[15px] mb-4 font-btn text-[13px]">
              Welcome to LiveX, where we explore the frontiers of crypto and
              technology innovations. This is a place where you can relax,
              create your favorite content and get paid in $LVX. Creative to
              make money!
            </p>
            <div className="md:w-[320px] w-full mx-auto text-xs font-semibold flex">
              <div className="md:w-[150px] md:h-[42px] w-[48%]">
                <Button title="Buy $LVX" />
              </div>
              <button className="w-[48%] h-[42px] rounded-lg ml-[4%] bg-gradient-to-r from-[#D98639] to-[#FF3D00]">
                <div className="border border-transparent bg-[#1f2227] h-[40px] w-[98%] leading-[38px] rounded-lg m-auto">
                  Watch Trailer
                </div>
              </button>
            </div>
          </div>
          <div className="landing-image">
            <Image
              src="/images/landingImage.png"
              alt=""
              width={1600}
              height={1600}
              className="md:mt-[-220px] rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
