import { Mycontext } from "@/app/layout";
import { ChevronRightIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";

const TotalcheckoutOrder = ({totalPrice}) => {
  const {OrderMenu  } = useContext(Mycontext);
  
  return (
    <div className="w-full mt-5">
      <div className="toptotal">
        <div className="flex justify-between items-center pb-4">
          <h6 className="text-[12px]">delivery</h6>
          <h5 className="text-[12px] ">
            +<span className="text-yellow-500">$</span>{totalPrice? '1.00' : '0.00'}
          </h5>
        </div>
        <div style={{marginTop:'10px'}} className="flex justify-between items-center ">
          <h6 className="text-[14px] font-semibold">Total</h6>
          <h5 className="font-semibold ">
            +<span className="text-yellow-500">$</span>{totalPrice? totalPrice + 1: 0}
          </h5>{" "}
        </div>

        <div className="coupancodeCheckout mt-6 flex flex-col space-y-5 justify-centent-center">
              <button className="flex items-center justify-between border border-yellow-500 p-2 rounded-lg bg-gray-100">
                <CommandLineIcon className="h-7 text-white p-1 rounded-md bg-yellow-500"/>
                <p className="text-[12px] text-gray-500 font-semibold ">Have a coupon code</p>
                <ChevronRightIcon className="h-4 "/>
              </button>
             {OrderMenu.length > 0 ? 
             <button onClick={() => alert('Your checkout process is completed')} className=" text-center text-[14px] text-white bg-yellow-500 py-3 hover:bg-yellow-600 px-2 rounded-lg bg-gray-100">
                Checkout
              </button>:
                <button className=" text-center text-[14px] text-white bg-gray-700 py-3  px-2 rounded-lg bg-gray-100">
                Checkout
              </button>
              }
        </div>
      </div>
    </div>
  );
};

export default TotalcheckoutOrder;
