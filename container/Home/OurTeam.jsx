import SectionHeader from "@/components/UI/SectionHeader";
import React from "react";
import { ourTeamData } from "./data/ourTeamData";
import MemberCard from "@/components/UI/MemberCard";
import bgImg from "@/public/images/team_bg.jpg";
import Image from "next/image";
function OurTeam() {
  return (
    <section className="relative pb-[100px] pt-[130px]">
      <Image
        src={bgImg}
        alt="team bg"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="container">
        <SectionHeader subTitle="OUR TEAM MEMBER" title="ACTIVE TEAM MEMBERS" />
        <div className="flex gap-8 sm:grid-cols-2 flex-wrap !justify-center w-full md:grid-cols-3 xl:grid-cols-4">
          {ourTeamData.map((item, idx) => (
            <MemberCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
