"use client";

import CatagorySection from "@/smallComponents.jsx/CatagorySection";
import React, { useEffect, useState } from "react";
import GoMealSpecial from "./GoMealSpecial";
import GoMealBox from "@/smallComponents.jsx/GoMealBox";
import axios from "axios";
import { MealBox } from "@/DataSource/DataSourceBox";

const HomeBody = () => {
  // const [MealBox, setMealBox] = useState([]);

  const FetchProduct = async () => {

    const options = {
      method: 'GET',
      url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas/1',
      headers: {
        'X-RapidAPI-Key': '9395885f24mshc736bf092fe659cp161156jsn55ef50ba8f8a',
        'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMealBox(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   FetchProduct();
  // }, []);

  return (
    <div className=" mt-6">
      <CatagorySection />
      <GoMealSpecial GoMealBox={<GoMealBox MealBox={MealBox} />} />
    </div>
  );
};

export default HomeBody;
