"use client";

import React from "react";
import {
  FaBeer,
  FaBicycle,
  FaDashcube,
  FaHistory,
  FaLocationArrow,
  FaPaperclip,
} from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Headers = () => {
  const router = usePathname();

  return (
    <div className="mainHeader w-[80px] sm:w-[230px] h-full flex items-center justify-center">
      <div className="innerheader w-[90%] mx-auto h-[90%] flex flex-col items-center">
        <div className="logo_container">
          <h2 className="md:text-[24px] text-center text-[20px] sm:leading-normal leading-tight font-bold">
            Go<br className="sm:hidden block"/>Meal<span className="text-yellow-500">.</span>{" "}
          </h2>
        </div>
        <div className="nav_Container mt-5 w-full  ">
          <nav className=" w-[90%] mx-auto">
            <ul className="w-full flex flex-col items-start  ">
              <li >
                <Link
                  className={`${
                    router === "/"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }  mainlink`}
                  href="/"
                >
                  <FaDashcube className="linkicon" />{" "}
                  <span className="linkname">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    router === "/FoodOrder"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  } px-3 mainlink`}
                  href="/FoodOrder"
                >
                  <FaBicycle className="linkicon" />{" "}
                  <span className="linkname">Food Order</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    router === "/Favorite"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  } px-3 mainlink`}
                  href="/Favorite"
                >
                  <FaLocationArrow className="linkicon" />{" "}
                  <span className="linkname">Favorite</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    router === "/OrderHistory"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  } px-3 mainlink`}
                  href="/OrderHistory"
                >
                  <FaHistory className="linkicon" />{" "}
                  <span className="linkname">Order History</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    router === "/Bills"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  } px-3 mainlink`}
                  href="/Bills"
                >
                  <FaPaperclip className="linkicon" />{" "}
                  <span className="linkname">Bills</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    router === "/Settings"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  } px-3 mainlink`}
                  href="/Settings"
                >
                  <FaLocationArrow className="linkicon" />{" "}
                  <span className="linkname">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Headers;
