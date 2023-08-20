"use client";

import React, { useContext, useEffect, useState } from "react";
import { Catagory } from '@/DataSource/DataSourceBox'
import ItemSinglelist from "./ItemSinglelist";
import TopNameHeader from "./TopNameHeader";
import axios from "axios";
import { Mycontext } from "@/app/layout";

const CatagorySection = () => {
  const {CatagoryApi} = useContext(Mycontext)
  return (
    <div className="">
      <TopNameHeader names={"Catagory"} />
      <div className="CatagoryBox ">
        {CatagoryApi?.slice(1,7).map((item) => {
          return (
            <>
              <ItemSinglelist key={item.id} item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CatagorySection;
