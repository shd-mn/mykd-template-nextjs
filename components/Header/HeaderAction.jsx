import { ButtonBg, ButtonPrimary } from "@/container/Home/data/icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderAction() {
  return (
    <div className="flex items-center gap-4">
      <button type="button" className="text-t-gray-clr mr-8">
        <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
      </button>
      <button
        type="button"
        className="group relative px-10 py-3 font-bold text-white duration-300 hover:text-dark-clr"
      >
        <span className="absolute left-0 top-0 -z-10 h-full w-full">
          <ButtonPrimary className="h-full w-full fill-transparent duration-300 group-hover:fill-primary" />
        </span>
        <FontAwesomeIcon size="md" icon={faPenToSquare} className="mr-1" />
        ~SIGN IN
      </button>

      <button
        type="button"
        className="group flex h-8 w-10 flex-col duration-300 justify-between"
      >
        <span className="inline-block h-[3px] w-2/3 bg-white group-hover:w-full duration-300" />
        <span className="inline-block h-[3px] w-full bg-white duration-300" />
        <span className="ml-auto inline-block h-[3px] w-2/3 bg-white group-hover:w-full duration-300" />
      </button>
    </div>
  );
}
