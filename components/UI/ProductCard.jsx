import Image from "next/image";
import Link from "next/link";
import productCardBg from "@/public/svg/productBg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ProductCard({ product }) {
  return (
    <div className="relative z-10 flex flex-col rounded-md p-5">
      <Image
        src={productCardBg}
        alt=""
        className="absolute left-0 top-0 -z-10 h-full w-full object-fill"
      />

      <div className="relative mb-3 pb-5 before:absolute before:bottom-0 before:block before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-[#383d44] before:to-transparent">
        <Link href={product.href} passHref>
          <Image
            src={product.image}
            alt={product.name}
            quality={100}
            className="w-full rounded-md object-cover"
          />
        </Link>
        <button className="absolute right-5 top-5 text-primary hover:text-secondary">
          <FontAwesomeIcon size="md" icon={faHeart} />
        </button>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-2">
        <span className="inline-flex flex-col ">
          <Link
            href={product.href}
            className="text-lg font-bold hover:text-primary"
          >
            {product.name}
          </Link>
          <Link
            href={product.href}
            className="text-sm font-medium hover:text-primary"
          >
            {product.category}
          </Link>
        </span>
        <span className="text-lg font-bold text-primary">{product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
