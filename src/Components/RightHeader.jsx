import React from "react";
import {
  Bars3BottomLeftIcon,
  CakeIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon as Bell } from "@heroicons/react/24/outline";
import RightSidemore from "@/smallComponents.jsx/RightSidemore";

const RightHeader = () => {
  return (
    <div className="Right_headers xl:static absolute xl:w-[300px] py-10 px-3">
      <div className="w-[90%] mx-auto">
        <div className="hamburgermenu xl:hidden block absolute right-[200px] top-2 cursor-pointer hover:bg-gray-200 rounded-md p-[1px]">
          <Bars3BottomLeftIcon className="h-6 text-gray-500" />
        </div>

        <div className="toprightMoreOptions ">
          <div className="top flex justify-between items-center">
            <div className="flex left justify-start space-x-3 w-[50%]">
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <CakeIcon className="h-5 text-gray-800" />
              </div>
              <div className="relative cursor-pointer">
                <span className="text-[40px] absolute bottom-[5px] right-0 text-yellow-500">
                  .
                </span>
                <Bell className="h-5 text-gray-800" />
              </div>
              <div className="relative cursor-pointer">
                <span className="">
                  <Cog6ToothIcon className="h-[10px] absolute bottom-[19px] right-0 text-gray-800" />
                </span>
                <Cog8ToothIcon className="h-5 text-gray-800" />
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
