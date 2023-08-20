import React, { useContext } from 'react'
import { OrderMenuData } from '@/DataSource/DataSourceBox'
import SingleOrderMenu from './SingleOrderMenu'
import TotalcheckoutOrder from './TotalcheckoutOrder'
import { Mycontext } from '@/app/layout'

const OrderMenu = () => {

  const {  ToggleDarkMode } = useContext(Mycontext);

  return (
    <div className="orderfullmenu">
    <div className=' mt-7 ordermenubox'>
        <h4 className={`${ToggleDarkMode?'text-white':'text-gray-700'} font-bold `}>Order Menu</h4>

        <div className="orderboxes">
            <div className="innerorder mt-5">
                {
                    OrderMenuData?.map((item) => {
                        return (<>
                            <SingleOrderMenu item={item} key={item.id}/>
                        </>)
                    })
                }
            </div>
        </div>
    </div>
    <TotalcheckoutOrder/>
    </div>

  )
}

export default OrderMenu