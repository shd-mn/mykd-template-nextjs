import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import bgImg from "@/public/images/trendnft_img.png";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function TrendingCard({ data }) {
  return (
    <div className="relative z-10 flex h-full select-none flex-col  px-5 py-6">
      <Image
        src={bgImg}
        alt=""
        quality={100}
        className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
      />

      <div className="mb-3 flex items-start justify-between">
        <div className="grid grid-cols-[40px_1fr] items-center gap-3">
          <Image
            src={data.creator_img}
            alt={data.creator}
            quality={100}
            className="w-full rounded-xl object-cover"
          />
          <span>
            <h6 className="leading-none">{data.title}</h6>
            <Link
              href={data.creator_link}
              className="text-t-gray-clr underline"
            >
              @{data.creator}
            </Link>
          </span>
        </div>
        <button type="button" className="group">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="text-t-gray-clr duration-200 group-hover:text-primary"
          />
        </button>
      </div>

      <div className="mb-4 w-full">
        <Image
          src={data.img}
          alt=""
          className="w-full rounded-md object-cover"
        />
      </div><>
        
      </>
      <div className="relative flex w-11/12 items-center justify-between gap-2 pt-3 before:absolute before:top-0 before:block before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-[#383d44] before:to-transparent">
        <div className="flex flex-col">
          <span className="text-sm">last bid</span>
          <span className="text-lg font-medium">
            {data.bid} <span className="text-secondary">ETH</span>
          </span>
        </div>
        <Link
          href="#!"
          className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-[6px] text-lg font-medium text-black duration-200 hover:bg-primary"
        >
          Bid
          <FontAwesomeIcon size="sm" icon={faArrowRightLong} />
        </Link>
      </div>
    </div>
  );
}
