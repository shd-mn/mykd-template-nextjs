import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonBg } from "./data/icons";
import { communityData } from "./data/communityData";
import roadmapImg from "@/public/images/roadmap.png";
import Image from "next/image";

export default function Community() {
  return (
    <section className="">
      <header
        className="relative h-[565px] bg-fixed bg-no-repeat before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/30 before:content-['']"
        style={{
          backgroundImage: 'url("./images/video_bg.jpg")',
        }}
      >
        <div className="container relative z-10 h-full">
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <button type="button" className="duration-300 hover:text-primary">
              <FontAwesomeIcon size="4x" icon={faCirclePlay} />
            </button>
            <h2 className="text-center text-2xl font-bold leading-none tracking-wider sm:text-start sm:text-[40px] lg:text-[55px]">
              JOIN THE <span className="text-primary">COMMUNITY</span>
            </h2>
            <p className="mb-4 text-center font-bold sm:text-start">
              Join our Discord community and choosec onsteur
            </p>
            <button
              type="button"
              className="group relative px-12 py-4 font-bold text-dark-clr "
            >
              <span className="absolute left-0 top-0 -z-10 h-full w-full">
                <ButtonBg className="h-full w-full fill-primary stroke-white duration-300 group-hover:fill-white" />
              </span>
              JOIN DISCORD
            </button>
          </div>
        </div>
      </header>
      <div
        className="py-[150px]"
        style={{ backgroundImage: 'url("./images/roadmap_bg.jpg")' }}
      >
        <div className="container px-8 lg:px-32">
          <div className="grid xl:grid-cols-2">
            <div className="xl:w-3/4">
              <h2 className="mb-8 text-center text-2xl font-extrabold leading-none tracking-widest sm:text-start sm:text-[40px] md:text-[50px] lg:text-[55px]">
                A LOOK INTO ROADMAPS SEASONS
              </h2>
              <p className="mb-5 font-bold leading-9 tracking-wide text-t-gray-clr">
                With Season 1 Ending with our play and Duis elementum
                sollicitudin is yaugue euismods Nulla ulla Player-focused
                updates games from Mobile App and Enjoy.
              </p>
              <button
                type="button"
                className="group relative z-10 px-14 py-4 font-bold text-dark-clr"
              >
                <span className="absolute left-0 top-0 -z-10 h-full w-full">
                  <ButtonBg className="h-full w-full fill-secondary stroke-white duration-300 group-hover:fill-primary" />
                </span>
                ROADMAP
              </button>
              <div className="animate-move-y py-20">
                <Image src={roadmapImg} alt="" />
              </div>
            </div>
            <div className="relative flex flex-col gap-6 before:absolute before:-left-5 before:top-0 before:z-10 before:h-full before:w-[6px] before:rounded-full before:bg-gradient-to-b before:from-primary before:to-transparent lg:before:-left-10">
              {communityData.map((article, idx) => (
                <article
                  key={idx}
                  className={`shadow-[0px_3px_7px_0px_#00000036 relative rounded-md bg-[#1b242e] p-11 ${idx === 0 && "before:absolute before:-left-4 before:top-1/2 before:h-3 before:w-5 before:-translate-y-1/2 before:border-[20px] before:border-transparent before:border-l-primary/90 lg:before:-left-9"}`}
                >
                  <h3 className="mb-6 text-[30px] font-extrabold">
                    {article.title}
                  </h3>
                  <ul className="">
                    {article.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-4 font-medium text-t-gray-clr"
                      >
                        {item.checked ? (
                          <span className="inline-block h-4 w-4 rounded-full bg-primary"></span>
                        ) : (
                          <span className="inline-block h-4 w-4 rounded-full border-[2px] border-slate-700 bg-dark-clr"></span>
                        )}
                        {item.article}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
