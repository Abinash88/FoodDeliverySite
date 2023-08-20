"use client";

import React, { useContext, useState } from "react";
import {
  Bars3BottomLeftIcon,
  CakeIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon as Bell } from "@heroicons/react/24/outline";
import RightSidemore from "@/smallComponents.jsx/RightSidemore";
import { Mycontext } from "@/app/layout";

const RightHeader = () => {
  const { CreateDarkmode, getRightHeader, ToggleDarkMode } = useContext(Mycontext);
  
  return (
    <div
      className={`Right_headers  ${ToggleDarkMode ?  'bg-gray-600' :'bg-white'} xl:h-[100vh h-[100vh]  overflow-y-auto ${
        getRightHeader ? "right-[0%]" : "right-[-100%]"
      } xl:static fixed w-[300px] xl:right-0 py-10 px-3 z-20`}
    >
      <div className="w-[90%] mx-auto overflow-auto">
        <div className="toprightMoreOptions ">
          <div className="top flex justify-between items-center">
            <div className="flex left items-center justify-start space-x-3 w-[50%]">
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <CakeIcon className={`h-5 ${ToggleDarkMode? 'text-white':'text-gray-800'} `} />
              </div>
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <Bell className={`h-5 ${ToggleDarkMode? 'text-white':'text-gray-800'} `} />
              </div>
              <div className="relative cursor-pointer">
                <span className="">
                  <Cog6ToothIcon className={`${ToggleDarkMode ?'text-white': ''} h-[10px] absolute bottom-[19px] right-0 text-gray-800`} />
                </span>
                <Cog8ToothIcon className={`h-5 ${ToggleDarkMode? 'text-white':'text-gray-800'} `} />
              </div>

              <div className="DarkMode">
                <div onClick={CreateDarkmode} className={`mode ${ToggleDarkMode? 'bg-white':'bg-gray-200'} slider  w-[40px] h-[20px]  cursor-pointer relative flex justify-center items-center rounded-full`}>
                  <span className={`${ToggleDarkMode? 'right-0 bg-gray-600':'left-0 bg-white '} slider absolute w-[18px] slider  h-[18px]   rounded-full`}></span>
                </div>
              </div>
            </div>


            <div className="w-[46px] mr-4 w-[30%] h-[46px] bg-gray-200 rounded-lg">
              <img src="" alt="" />
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
