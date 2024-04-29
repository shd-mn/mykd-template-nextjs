"use client";
import Image from "next/image";
import SectionHeader from "@/components/UI/SectionHeader";
import Link from "next/link";
import { ButtonBg2 } from "./data/icons";
import GalerySlider from "@/components/UI/GalerySlider";
//
import icon01 from "@/public/images/features_icon01.png";
import icon02 from "@/public/images/features_icon02.png";
import icon03 from "@/public/images/features_icon03.png";
import areaBg from "@/public/images/area_bg01.jpg";

import { steamData, steamSliderData } from "./data/steamData";
import { useState } from "react";

export default function Steamer() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="relative py-[130px]">
      <Image
        src={areaBg}
        alt=""
        quality={100}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="container mb-32">
        <SectionHeader subTitle="KNOW ABOUT US" title="TOP RATED STEAMERS" />
        <header className="mx-auto mb-10 flex flex-wrap w-full justify-center gap-10">
          <Link
            href="#!"
            className="relative px-8 py-2 text-xl font-bold duration-200 hover:bg-primary hover:text-black"
          >
            <span className="absolute left-0 top-0 block h-full w-full text-primary">
              <ButtonBg2 className="h-full w-full" />
            </span>
            BUY HERO
          </Link>
          <Link
            href="#!"
            className="relative px-8 py-2 text-xl font-bold duration-200 hover:bg-secondary hover:text-black"
          >
            <span className="absolute left-0 top-0 block h-full w-full text-secondary">
              <ButtonBg2 className="h-full w-full" />
            </span>
            BUY HERO
          </Link>
        </header>

        <div className="">
          <ul className="relative mx-auto mb-20 flex flex-wrap w-3/4 items-center justify-center gap-4 py-3 before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent">
            {steamData.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`steamer-tab ${item.id === 0 && "steamer-tab-active"}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span></span>
                  <Image
                    src={item.tabImg}
                    alt={item.title}
                    className="h-[64px] w-[64px] rounded-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="grid gap-10 duration-300 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <Image
                src={steamData[activeTab].img}
                alt={steamData[activeTab].title}
                quality={100}
                className="h-[320px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-auto grid sm:grid-cols-[1.4fr_1fr] justify-between gap-8">
                <div className="flex flex-col">
                  <h4 className="text-[30px] font-extrabold">
                    {steamData[activeTab].title}
                  </h4>
                  <span className="mb-4 text-xl font-bold text-secondary">
                    RATE {steamData[activeTab].rate}
                  </span>
                  <p className="mb-5 font-medium leading-6 tracking-wider text-t-gray-clr">
                    {steamData[activeTab].desc}
                  </p>
                </div>
                <ul className="flex flex-col mb-5 gap-2">
                  <li className="flex items-center gap-3 rounded-md bg-gradient-to-r from-[#1f2935] to-transparent px-3 py-2 font-bold text-t-gray-clr">
                    <Image src={icon01} alt="" className="w-10" />
                    Chichi Dragon Ball
                  </li>
                  <li className="flex items-center gap-3 rounded-md bg-gradient-to-r from-[#1f2935] to-transparent px-3 py-2 font-bold text-t-gray-clr">
                    <Image src={icon02} alt="" className="w-10" />
                    Space Babe Night
                  </li>
                  <li className="flex items-center gap-3 rounded-md bg-gradient-to-r from-[#1f2935] to-transparent px-3 py-2 font-bold text-t-gray-clr">
                    <Image src={icon03} alt="" className="w-10" />
                    Dragon Ball
                  </li>
                </ul>
              </div>

              <ul className="flex flex-wrap sm:flex-nowrap justify-between gap-3">
                <li className="w-full bg-[#1f2935] bg-gradient-to-b from-[#141a20] to-transparent px-[30px] py-[25px] text-center font-bold tracking-wider text-t-gray-clr duration-300 hover:text-primary">
                  <Link href="#!">DRAGON BALL</Link>
                </li>
                <li className="w-full bg-[#1f2935] bg-gradient-to-b from-[#141a20] to-transparent px-[30px] py-[25px] text-center font-bold tracking-wider text-t-gray-clr duration-300 hover:text-primary">
                  <Link href="#!">NFT MARKET</Link>
                </li>
                <li className="w-full bg-[#1f2935] bg-gradient-to-b from-[#141a20] to-transparent px-[30px] py-[25px] text-center font-bold tracking-wider text-t-gray-clr duration-300 hover:text-primary">
                  <Link href="#!">SUPPORT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-0">
        <GalerySlider data={steamSliderData} />
      </div>
    </section>
  );
}
