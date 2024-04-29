import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo.png";
import socialImg1 from "@/public/images/social_icon01.png";
import socialImg2 from "@/public/images/social_icon02.png";
import socialImg3 from "@/public/images/social_icon03.png";
import socialImg4 from "@/public/images/social_icon04.png";
import payment_card from "@/public/images/payment_card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0f161b] border-t-[0.5px] border-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 py-20">
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="inline-block h-[40px] w-fit">
              <Image
                src={logo}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </Link>
            <p className="text-t-gray-clr">
              Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
              augue euismod. Nulla ullam dolor sitamet consectetur
            </p>
            <span className="font-bold">
              ACTIVE
              <span className="ml-1 text-primary">
                WITH US <FontAwesomeIcon icon={faAnglesRight} />
              </span>
            </span>
            <ul className="flex gap-4">
              <li>
                <Link href="#!">
                  <Image src={socialImg1} alt="social" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="#!">
                  <Image src={socialImg2} alt="social" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="#!">
                  <Image src={socialImg3} alt="social" className="h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="#!">
                  <Image src={socialImg4} alt="social" className="h-8 w-8" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">QUICK LINK</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  All NFTs
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Social Network
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Domain Names
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Collectibles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">SUPPORTS</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Setting & Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Help & Support
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Live Auctions
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Item Details
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  24/7 Supports
                </Link>
              </li>
              <li>
                <Link
                  href="#!"
                  className="text-t-gray-clr duration-200 hover:text-primary"
                >
                  Our News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">NEWSLETTER</h2>
            <p className="text-t-gray-clr mb-5">
              Subscribe our newsletter to get our latest update &
              newsconsectetur
            </p>

            <form className="flex h-14 w-full items-center rounded-md bg-[#1f2935]">
              <input
                type="email"
                placeholder="Get News & Updates"
                className="mb-1 h-full w-full border-none bg-transparent px-5 py-4 outline-none"
              />
              <button
                type="submit"
                className="flex aspect-square h-full items-center justify-center rounded-md bg-primary text-dark-clr duration-200 hover:bg-secondary"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="xl"
                  className="mb-1 rotate-45"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#090d10]">
        <div className="container">
          <div className="flex flex-wrap justify-center sm:justify-between gap-2 py-5">
            <h6 className="text-sm font-bold">
              COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY
              <span className="text-primary ml-1">MYKD</span>
            </h6>
            <div>
              <Image
                src={payment_card}
                alt="payments"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
