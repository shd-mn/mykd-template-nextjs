import Image from "next/image";
import logo from "@/public/images/logo.png";
import Navbar from "./Navbar";
import Link from "next/link";
import HeaderAction from "./HeaderAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-[112px] w-full bg-gradient-to-b from-tertiary to-tertiary/10 px-8 py-[11px] backdrop-blur-sm">
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
        <button type="button" className="block sm:hidden text-primary">
          <FontAwesomeIcon size="2x" icon={faBars} />
        </button>
      </div>
    </header>
  );
}
