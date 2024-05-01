"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import sliderImg from "@/public/images/slider_img01.png";
import sliderBgImg from "@/public/images/slider_bg.jpg";
import brandLogo1 from "@/public/images/brand_logo01.png";
import brandLogo2 from "@/public/images/brand_logo02.png";
import brandLogo3 from "@/public/images/brand_logo03.png";
import textGradient from "@/public/images/text_gradient_bg.png";
import shape from "@/public/images/slider_shape02.png";
import { ButtonBg } from "./data/icons";

export default function Hero() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setTransformX(distanceX / 10);
    setTransformY(distanceY / 10);
  };

  useEffect(() => {
    if (!isTransformed) {
      setTransformY(0);
      setTransformX(0);
    }
  }, [isTransformed]);

  return (
    <section className="hero-slider relative z-10 pt-[160px]">
      <Image
        src={sliderBgImg}
        alt=""
        quality={100}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-[1524px] px-8 pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col items-center lg:items-start">
            <h6 className="relative px-5 py-[17px] text-xl font-extrabold tracking-[0.2em] text-primary lg:w-full">
              <span className="absolute left-0 top-0 inline-block h-full w-full opacity-25">
                <Image
                  src={textGradient}
                  alt="Text Gradient BG"
                  className="h-full object-contain"
                />
              </span>
              LIVE GAMING
            </h6>
            <h1 className="mb-4 font-berlinSans text-[56px] leading-none drop-shadow-[-1px_5px_0_#45f882] sm:text-[74px] md:text-[118px] lg:text-[94px] xl:text-[118px] 2xl:text-[150px]">
              STEAMING
            </h1>
            <p className="mb-8 text-[26px] font-extrabold tracking-[0.2em]">
              VIDEO GAMES ONLINE
            </p>
            <button
              type="button"
              className="group relative mb-32 px-12 py-4 font-bold text-dark-clr md:mb-52 "
            >
              <span className="absolute left-0 top-0 -z-10 h-full w-full">
                <ButtonBg className="h-full w-full fill-primary stroke-white duration-300 group-hover:fill-white" />
              </span>
              CONTACT US
            </button>

            <ul className="grid w-3/4 items-center justify-center gap-3 md:grid-cols-3 md:justify-between">
              <li>
                <Image
                  src={brandLogo1}
                  alt=""
                  className="h-8 w-full object-contain"
                />
              </li>
              <li>
                <Image
                  src={brandLogo2}
                  alt=""
                  className="h-6 w-full object-contain"
                />
              </li>
              <li>
                <Image
                  src={brandLogo3}
                  alt=""
                  className="mt-2 h-6 w-full object-contain"
                />
              </li>
            </ul>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsTransformed(true)}
            onMouseLeave={() => setIsTransformed(false)}
            className="mx-auto"
          >
            <Image
              src={sliderImg}
              alt="slider image"
              priority
              quality={100}
              className={`${isTransformed ? "transformed" : ""} duration-200`}
              style={{
                transform: `translate(${transformX}px, ${transformY}px)`,
              }}
            />
          </div>
        </div>
        <div>
          <Image
            src={shape}
            alt=""
            className="animate-opacity absolute left-1/2 top-[20%] z-10 h-8 w-8 object-contain"
          />
          <Image
            src={shape}
            alt=""
            className="animate-opacity2 top-[18%] absolute left-[45%] z-10 h-6 w-6 object-contain"
          />
          <Image
            src={shape}
            alt=""
            className="animate-opacity absolute left-[15%] top-[20%] z-10 h-5 w-5 object-contain"
          />
          <Image
            src={shape}
            alt=""
            className="animate-opacity2 top-[58%] absolute left-[35%] z-10 h-6 w-6 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
