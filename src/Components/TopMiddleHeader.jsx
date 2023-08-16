'use client'

import React, { useContext } from 'react'
import { ArchiveBoxIcon, Bars3BottomLeftIcon, MagnifyingGlassIcon, TruckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Mycontext } from '@/app/layout'

const TopMiddleHeader = () => {

  const {CheckRightHeader} = useContext(Mycontext);
    const [selectPart, setselectPart] = useState(false)

    const SelectDelivery = () => {
      setselectPart(false);
    }
  
    const SelectPickup = () => {
      setselectPart(true);
    }
    console.log(selectPart)
  return (
         <div className='topMiddleHeader w-[90%] pb-5 flex justify-between items-center mx-auto mt-10'>
          <h3 className='md:text-[19px] text-[16px] font-bold'>Hello, Samanatha</h3>

          <div className='deliveryPickupBtn sm:mr-0 mr-7 h-[40px] bg-gray-300 cursor-pointer relative lg:w-[150px] sm:w-[140px] w-[100px] flex rounded-lg bg-white'>

            <div onClick={SelectDelivery} className={`w-[50%]  z-10 ${selectPart ? 'text-gray-600' : 'bg-yellow-500 text-white'}  h-full  rounded-l-lg text-center  font-semibold text-[12px] lg:text-[14px] flex items-center  justify-center`}>
              <ArchiveBoxIcon className={`h-6 ${selectPart ? 'text-gray-600' : ' text-white'} sm:hidden block text-`} />
              <span className='sm:block hidden'>Delivery</span>
            </div>

            <div onClick={SelectPickup} className={`w-[50%]   ${selectPart ? 'bg-yellow-500 text-white' : 'text-gray-600'}   rounded-r-lg  h-full flex justify-center items-center text-center font-semibold text-[12px] lg:text-[14px]`}>
              <TruckIcon className={`h-6 ${selectPart ? ' text-white' : 'text-gray-600'} sm:hidden block text-`} />
              <span className='sm:block hidden'>Pickup</span>
            </div>

            <div onClick={CheckRightHeader} className="hamburgermenu xl:hidden block fixed z-50 right-[10px] top-4 cursor-pointer hover:bg-gray-200 rounded-md p-[1px]">
          <Bars3BottomLeftIcon className="h-6 text-gray-500" />
        </div>

          </div>

          <form className='lg:w-[300px] w-auto formclass lg:rounded-lg rounded-full sm:flex hidden  h-[40px] bg-white flex items-center  px-2'>
            <MagnifyingGlassIcon className='h-6 text-yellow-500 mr-0 lg:mr-2' />
            <input type="search" placeholder='What do you want to eat today?' className='w-full h-full bg-transparent lg:block hidden rounded-lg' name="" />
          </form>
        </div>
  )
}

export default TopMiddleHeader