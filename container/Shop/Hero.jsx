import Image from "next/image";
import sliderImg from "@/public/images/breadcrumb_img01.png";
import sliderBgImg from "@/public/images/slider_bg.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-slider relative z-10 pt-[160px]">
      <Image
        src={sliderBgImg}
        alt=""
        quality={100}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="container pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-[60px] font-extrabold">SHOP</h2>
            <nav className="flex items-center gap-1 font-bold">
              <Link href="/" className="text-primary">
                MYKD
              </Link>
              &gt; <p>SHOP</p>
            </nav>
          </div>

          <div className="mx-auto">
            <Image
              src={sliderImg}
              alt="slider image"
              priority
              quality={100}
              className={`hover:animate-move-x duration-200`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
