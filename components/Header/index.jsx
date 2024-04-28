import Image from "next/image";
import logo from "@/public/images/logo.png";
import Navbar from "./Navbar";
import Link from "next/link";
import HeaderAction from "./HeaderAction";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-[112px] w-full backdrop-blur-sm from-tertiary to-tertiary/10 bg-gradient-to-b px-8 py-[11px]">
      <div className="mx-auto flex h-full max-w-[1524px] items-center justify-between">
        <Link href="/" className="flex h-[40px]">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-contain"
          />
        </Link>
        <Navbar />
        <HeaderAction />
      </div>
    </header>
  );
}
