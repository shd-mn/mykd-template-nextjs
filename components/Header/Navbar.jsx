import Link from "next/link";
import React from "react";
import { linkData } from "./data/linkData";

export default function Navbar() {
  return (
    <nav className="hidden xl:flex">
      <ul className="flex gap-4">
        {linkData.map((item, idx) => (
          <li className="" key={idx}>
            <Link
              href={item.href}
              className={`group relative py-1 duration-300 font-bold ${idx === 0 ? "text-primary" : "hover:text-primary"}`}
            >
              {item.text}
              <span
                className={`absolute left-1/2 top-1/2 inline-block h-[1px] w-10 -translate-x-1/2 -translate-y-1/2 bg-primary duration-300 group-hover:-rotate-45 ${idx === 0 ? "visible -rotate-45" : "invisible group-hover:visible"}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
