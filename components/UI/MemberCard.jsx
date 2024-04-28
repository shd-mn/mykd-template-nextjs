import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MemberCard({ data }) {
  return (
    <Link
      href={data.href}
      className="member-card bg-tertiary flex flex-col items-center overflow-hidden rounded-xl px-[25px] py-[35px] duration-300 ease-in-out hover:-translate-y-2"
    >
      <div className="team-img-box">
        <Image
          src={data.img}
          alt={data.name}
          className="mb-6 w-full rounded-full border-4 border-gray-200 object-cover"
        />
      </div>
      <h4 className="mb-2 text-xl font-medium">{data.name}</h4>
      <span className="font-medium text-primary">{data.prof}</span>
    </Link>
  );
}
