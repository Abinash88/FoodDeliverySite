'use client'

import React, { useContext, useEffect, useMemo, useState } from 'react'
import SingleOrderMenu from './SingleOrderMenu'
import TotalcheckoutOrder from './TotalcheckoutOrder'
import { Mycontext } from '@/app/layout'
import { MealBox } from '@/DataSource/DataSourceBox'

const OrderMenu = () => {

  const {  ToggleDarkMode, DeleteOrderMenu, AddedToOrderMenu,OrderMenu, MealBox } = useContext(Mycontext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
    useEffect(() => {
        if(typeof(Storage) !== 'undefined'){
            const items = MealBox.filter((item) => OrderMenu?.includes(item.id));
            const total = items.reduce((total, item) => parseFloat(total) + parseFloat(item.id), 0);
            setTotalPrice(total)
            setFilterProduct(items);
        }
    },[AddedToOrderMenu,DeleteOrderMenu])
    console.log(filterProduct)

  return (
    <div className="orderfullmenu">
    <div className=' mt-7 ordermenubox'>
        <h4 className={`${ToggleDarkMode?'text-white':'text-gray-700'} font-bold `}>Order Menu</h4>

        <div className="orderboxes">
            <div className="innerorder mt-5">
                {
                    filterProduct?.map((item) => {
                        return (<>
                            <SingleOrderMenu item={item} key={item?.id}/>
                        </>)
                    })
                }
            </div>
        </div>
    </div>
    <TotalcheckoutOrder totalPrice={totalPrice}/>
    </div>

  )
}

export default OrderMenu