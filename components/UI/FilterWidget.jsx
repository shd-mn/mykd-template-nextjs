import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FilterWidget({ title, children }) {
  return (
    <div className="overflow-hidden ">
      <div className="flex items-center gap-2 rounded-md border-[1px] border-slate-800 p-5">
        <FontAwesomeIcon
          size="lg"
          icon={faCaretRight}
          className="text-primary"
        />
        <h6 className="text-lg font-bold">{title}</h6>
      </div>
      <div className="bg-[#171d24] p-5">{children}</div>
    </div>
  );
}

export default FilterWidget;
