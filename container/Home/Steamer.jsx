import SectionHeader from "@/components/UI/SectionHeader";
import Link from "next/link";
import React from "react";
import { ButtonBg2 } from "./data/icons";

export default function Steamer() {
  return (
    <section className="py-[130px]">
      <div className="container">
        <SectionHeader subTitle="KNOW ABOUT US" title="TOP RATED STEAMERS" />
        <div className="mx-auto flex w-full justify-center gap-10">
          <Link
            href="#!"
            className="relative px-8 py-3 text-xl font-bold duration-200 hover:bg-primary hover:text-black"
          >
            <span className="absolute left-0 top-0 block h-full w-full text-primary">
              <ButtonBg2 className="h-full w-full" />
            </span>
            BUY HERO
          </Link>
          <Link
            href="#!"
            className="relative px-7 py-4 text-xl font-bold duration-200 hover:bg-secondary hover:text-black"
          >
            <span className="absolute left-0 top-0 block h-full w-full text-secondary">
              <ButtonBg2 className="h-full w-full" />
            </span>
            BUY HERO
          </Link>
        </div>
      </div>
    </section>
  );
}
