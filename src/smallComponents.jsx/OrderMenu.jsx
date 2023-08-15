import React from 'react'
import { OrderMenuData } from '@/DataSource/DataSourceBox'
import SingleOrderMenu from './SingleOrderMenu'
import TotalcheckoutOrder from './TotalcheckoutOrder'

const OrderMenu = () => {
  return (
    <div className="orderfullmenu">
    <div className=' mt-7 ordermenubox'>
        <h4 className='font-bold text-gray-700'>Order Menu</h4>

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