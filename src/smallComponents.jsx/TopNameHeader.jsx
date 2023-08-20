import { Mycontext } from "@/app/layout";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useContext } from "react";

const TopNameHeader = ({names, viewall}) => {
  const {ToggleDarkMode}  = useContext(Mycontext);

  return (
    <>
      <div className="topname flex  justify-between">
        <h3 className={`${ToggleDarkMode?'text-gray-100':'text-gray-700'} font-semibold text-[15px] `}>{names}</h3>
        <Link className="flex items-center" href={"/"}>
          {" "}
          <span
            style={{ fontSize: "13px", color: "#f8b602" }}
            className=" text-yellow-400"
          >
            View all{" "}
          </span>{" "}
          <ChevronRightIcon
            style={{ color: "#f8b602", height: "15px" }}
            className=""
          />
        </Link>
      </div>
    </>
  );
};

export default TopNameHeader;
