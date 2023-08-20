"use client";

import CatagorySection from "@/smallComponents.jsx/CatagorySection";
import React, { useContext, useEffect, useState } from "react";
import GoMealSpecial from "./GoMealSpecial";
import GoMealBox from "@/smallComponents.jsx/GoMealBox";
import { MealBox } from "@/DataSource/DataSourceBox";
import { Mycontext } from "@/app/layout";

const HomeBody = () => {
  const {MealBox} = useContext(Mycontext)
 

  return (
    <div className=" mt-6">
      <CatagorySection />
      <GoMealSpecial GoMealBox={<GoMealBox MealBox={MealBox} />} />
    </div>
  );
};

export default HomeBody;
