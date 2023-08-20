"use client";

import React, { useContext, useState } from "react";
import {
  Bars3BottomLeftIcon,
  CakeIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { BellIcon as Bell } from "@heroicons/react/24/outline";
import RightSidemore from "@/smallComponents.jsx/RightSidemore";
import { Mycontext } from "@/app/layout";

const RightHeader = () => {
  const { CreateDarkmode, getRightHeader, ToggleDarkMode } =
    useContext(Mycontext);

  return (
    <div
      className={`Right_headers  ${
        ToggleDarkMode ? "bg-gray-600" : "bg-white"
      } xl:h-[100vh h-[100vh]  overflow-y-auto ${
        getRightHeader ? "right-[0%]" : "right-[-100%]"
      } xl:static fixed w-[300px] xl:right-0 py-10 px-3 z-20`}
    >
      <form className="w-[230px] mb-3  formclass rounded-lg flex md:hidden h-[30px]  bg-gray-100 flex items-center  px-2">
        <MagnifyingGlassIcon className="h-6 cursor-pointer text-yellow-500 mr-0 mr-3" />
        <input
          type="search"
          placeholder="Search here..."
          className="w-full h-full bg-transparent  rounded-lg"
          name=""
        />
      </form>{" "}
      <div className="w-[90%] mx-auto  overflow-auto">
        <div className="toprightMoreOptions ">
          <div className="top flex justify-between items-center">
            <div className="flex left items-center justify-start space-x-3 w-[50%]">
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <CakeIcon
                  className={`h-5 ${
                    ToggleDarkMode ? "text-white" : "text-gray-800"
                  } `}
                />
              </div>
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <Bell
                  className={`h-5 ${
                    ToggleDarkMode ? "text-white" : "text-gray-800"
                  } `}
                />
              </div>
              <div className="relative cursor-pointer">
                <span className="">
                  <Cog6ToothIcon
                    className={`${
                      ToggleDarkMode ? "text-white" : ""
                    } h-[10px] absolute bottom-[19px] right-0 text-gray-800`}
                  />
                </span>
                <Cog8ToothIcon
                  className={`h-5 ${
                    ToggleDarkMode ? "text-white" : "text-gray-800"
                  } `}
                />
              </div>

              <div className="DarkMode">
                <div
                  onClick={CreateDarkmode}
                  className={`mode ${
                    ToggleDarkMode ? "bg-white" : "bg-gray-300"
                  } slider  w-[40px] h-[18px]  cursor-pointer relative flex justify-center items-center rounded-full`}
                >
                  <span
                    className={`${
                      ToggleDarkMode
                        ? "right-[1px] bg-gray-600"
                        : "left-[1px] bg-white "
                    } slider absolute w-[16px] slider  h-[16px]   rounded-full`}
                  ></span>
                </div>
              </div>
            </div>

            <div className="w-[46px] mr-4 w-[30%] overflow-hidden h-[46px] bg-gray-200 rounded-lg">
              <img className="w-full h-full " src="https://tse3.mm.bing.net/th?id=OIP.uDdCQ8TtQEka2JnVhjHqYAHaGF&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="bottom"></div>
        </div>

        <RightSidemore />
      </div>
    </div>
  );
};

export default RightHeader;
