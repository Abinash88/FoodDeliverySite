'use client'

import React from "react";
import { FaBeer, FaBicycle, FaDashcube, FaHistory, FaLocationArrow, FaPaperclip } from 'react-icons/fa';
import { useRouter,usePathname } from "next/navigation";
import '../Styles/design.css'
import Link from "next/link";

const Headers = () => {
  const router = usePathname();
  
  return (
    <div className="mainHeader">
      <div className="innerheader">
        <div className="logo_container">
          <h2 className="text-[20px]">GoMeal<span>.</span>  </h2>
        </div>
        <div className="nav_Container">
          <nav>
            <ul>
              <li>
                <Link className={`${router === '/'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/"><FaDashcube className="linkicon"/> <span className="linkname">Dashboard</span></Link>
              </li>
              <li>
                <Link className={`${router === '/FoodOrder'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/FoodOrder"><FaBicycle className="linkicon"/> <span className="linkname">Food Order</span></Link>
              </li>
              <li>
                <Link className={`${router === '/Favorite'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/Favorite"><FaLocationArrow className="linkicon"/>  <span className="linkname">Favorite</span></Link>
              </li>
              <li>
                <Link className={`${router === '/OrderHistory'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/OrderHistory"><FaHistory className="linkicon"/>  <span className="linkname">Order History</span></Link>
              </li>
              <li>
                <Link className={`${router === '/Bills'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/Bills"><FaPaperclip className="linkicon"/>  <span className="linkname">Bills</span></Link>
              </li>
              <li>
                <Link className={`${router === '/Settings'? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'text-gray-600 hover:bg-gray-100'} mainlink`} href="/Settings"><FaLocationArrow className="linkicon"/>  <span className="linkname">Settings</span></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Headers;


