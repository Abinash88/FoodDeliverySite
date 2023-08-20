'use client'

import { Mycontext } from '@/app/layout';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react'

const SingleOrderMenu = ({item}) => {

  const {  ToggleDarkMode, DeleteOrderMenu, OrderMenu  } = useContext(Mycontext);

  return (
    <div className=' flex justify-between ordermenu items-center '>
        <div className="ordermenuimage rounded-md overflow-hidden bg-gray-200">
            <img src={item.image} alt=""  />
        </div>
        <div className={`text-[13px] flex flex-col space-y-1 items-start justify-center ${ToggleDarkMode? 'text-gray-200':'text-gray-500'}`}>
            <h5>{item?.title.substring(0, 10)}...</h5>
            <div className="flex w-full justify-between items-center">
              <p>1x</p>
              <button onClick={() => DeleteOrderMenu(item.id)}><TrashIcon className='h-6 hover:bg-gray-100 rounded-full p-[5px] text-yellow-500'/></button>
            </div>
        </div>

        <div className="pricebox">
            <h5 className='font-semibold '>+<span className='text-yellow-500'>$</span>{item?.id}</h5>
        </div>
    </div>
  )
}

export default SingleOrderMenu