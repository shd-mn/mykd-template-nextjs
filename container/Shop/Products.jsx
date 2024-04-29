import React from "react";
import { productsData } from "./data/productsData";
import ProductCard from "@/components/UI/ProductCard";
import FilterWidget from "@/components/UI/FilterWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import productImg01 from "@/public/images/shop_details08.jpg";
import productImg02 from "@/public/images/shop_details07.jpg";
import productImg03 from "@/public/images/shop_details11.jpg";
import Image from "next/image";

export default function Products() {
  return (
    <section className="bg-[#0f161b] py-[120px]">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
          <aside className="flex flex-col gap-8 max-md:order-2">
            <FilterWidget title="SEARCH">
              <form className="flex h-full w-full items-center justify-between gap-2">
                <input
                  type="text"
                  className="w-full border-none bg-transparent font-medium tracking-wider outline-none"
                  placeholder="Search products"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </form>
            </FilterWidget>
            <FilterWidget title="FILTER BY PRICE">
              <>
                <div className="relative mb-5 h-[6px] w-full bg-primary pt-[5px]">
                  <button
                    type="button"
                    className="absolute bottom-full left-0 border-[6px] border-transparent border-b-primary"
                  ></button>
                  <button
                    type="button"
                    className="absolute bottom-full right-0 border-[6px] border-transparent border-b-primary"
                  ></button>
                </div>
                <div className="flex items-center justify-between">
                  <button type="button" className="font-bold">
                    FILTER
                  </button>
                  <span className="text-t-gray-clr">Price: $20 — $150</span>
                </div>
              </>
            </FilterWidget>
            <FilterWidget title="RELATED PRODUCTS">
              <ul>
                <li className="mb-4">
                  <Link
                    href="#!"
                    passHref
                    className="group grid grid-cols-[80px_2fr] items-center gap-4"
                  >
                    <Image src={productImg01} alt="" />
                    <div className="flex flex-col">
                      <span className="text-secondary">
                        <FontAwesomeIcon size="sm" icon={faStar} />
                        <FontAwesomeIcon size="sm" icon={faStar} />
                        <FontAwesomeIcon size="sm" icon={faStar} />
                        <FontAwesomeIcon size="sm" icon={faStar} />
                        <FontAwesomeIcon size="sm" icon={faStar} />
                      </span>
                      <h4 className="text-sm font-bold duration-300 group-hover:text-primary">
                        PS4 CONTROLLER
                      </h4>
                      <span className="text-t-gray-clr">$59.00</span>
                    </div>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="#!"
                    passHref
                    className="group grid grid-cols-[80px_2fr] items-center gap-4"
                  >
                    <Image src={productImg02} alt="" />
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold duration-300 group-hover:text-primary">
                        GUN ROBOT X
                      </h4>
                      <span className="text-t-gray-clr">$149.00</span>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#!"
                    passHref
                    className="group grid grid-cols-[80px_2fr] items-center gap-4"
                  >
                    <Image src={productImg03} alt="" />
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold duration-300 group-hover:text-primary">
                        REPLICA GUN
                      </h4>
                      <span className="text-t-gray-clr">$89.00</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </FilterWidget>
            <FilterWidget title="CATEGORIES">
              <ul>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>ACCESSORIES</p> <span>(4)</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>CONTROLLER </p> <span>(2)</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>E-SPORTS</p> <span>(3)</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>GAMING</p> <span>(4)</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>TOURNAMENTS</p> <span>(1)</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#!"
                    className="flex items-center justify-between font-medium text-t-gray-clr duration-300 hover:text-white"
                  >
                    <p>UNCATEGORIZED</p> <span>(0)</span>
                  </Link>
                </li>
              </ul>
            </FilterWidget>
          </aside>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            <div className="col-span-full flex w-full justify-center gap-3">
              <button
                type="button"
                className="h-14 w-14 rounded-md bg-primary font-medium text-dark-clr"
              >
                1
              </button>
              <button
                type="button"
                className="h-14 w-14 rounded-md border border-slate-700 bg-[#171d24] font-medium text-t-gray-clr duration-200 hover:bg-primary hover:text-dark-clr"
              >
                2
              </button>
              <button
                type="button"
                className="h-14 w-14 rounded-md border border-slate-700 bg-[#171d24] font-medium text-t-gray-clr duration-200 hover:bg-primary hover:text-dark-clr"
              >
                <FontAwesomeIcon size="sm" icon={faChevronRight} />
                <FontAwesomeIcon size="sm" icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
