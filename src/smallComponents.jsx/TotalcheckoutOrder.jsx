import React from "react";

const TotalcheckoutOrder = () => {
  return (
    <div className="w-full mt-5">
      <div className="toptotal">
        <div className="flex justify-between items-center pb-4">
          <h6 className="text-[12px]">delivery</h6>
          <h5 className="text-[12px] ">
            +<span className="text-yellow-500">$</span>1.00
          </h5>
        </div>
        <div style={{marginTop:'10px'}} className="flex justify-between items-center ">
          <h6 className="text-[14px] font-semibold">Total</h6>
          <h5 className="font-semibold ">
            +<span className="text-yellow-500">$</span>202.00
          </h5>{" "}
        </div>

        <div className="coupancode">
            
        </div>
      </div>
    </div>
  );
};

export default TotalcheckoutOrder;
