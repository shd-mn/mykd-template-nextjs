import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Card({ data }) {
  return (
    <div className="card grid sm:grid-cols-[1fr_1.6fr] gap-5 rounded-md border border-transparent bg-[#121a23] p-6 duration-300 hover:border-[#45f88233]">
      <Image
        src={data.img}
        alt=""
        className="h-full w-full aspect-square rounded-md object-cover"
      />

      <div className="">
        <Link href={data.href} className="text-xl inline-block font-bold mb-4">
          {data.title}
        </Link>
        <div className="flex flex-col gap-4 mb-3">
          <div className="flex items-center gap-5">
            <Image src={data.creator_img} alt="creator" className="" />
            <Link href={data.creator_link} className="text-text-gray-clr">
              {data.creator}
            </Link>
            <span className="block h-4 w-[1px] bg-gray-500" />
            <p className="">CREATOR</p>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-md border border-gray-700 p-3">
            <span className="text-lg font-medium">
              {data.bid} <span className="text-secondary">ETH</span>
            </span>
            <Link
              href="#!"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-lg font-medium text-black duration-200 hover:bg-primary"
            >
              Bid
              <FontAwesomeIcon size="sm" icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
