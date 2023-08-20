import { Mycontext } from '@/app/layout';
import React, { useContext } from 'react'

const SingleOrderMenu = ({item}) => {

  const {  ToggleDarkMode } = useContext(Mycontext);

  return (
    <div className='flex justify-between ordermenu items-center '>
        <div className="ordermenuimage">
            <img src="" alt="" />
        </div>
        <div className={`text-[13px] ${ToggleDarkMode? 'text-gray-200':'text-gray-500'}`}>
            <h5>{item.name}</h5>
            <p>1x</p>
        </div>

        <div className="pricebox">
            <h5 className='font-semibold '>+<span className='text-yellow-500'>$</span>{item?.price}</h5>
        </div>
    </div>
  )
}

export default SingleOrderMenu