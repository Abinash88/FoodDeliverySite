'use client'

import React from 'react'
import { ArchiveBoxIcon, MagnifyingGlassIcon, TruckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const TopMiddleHeader = () => {

    const [selectPart, setselectPart] = useState(false)

    const SelectDelivery = () => {
      setselectPart(false);
    }
  
    const SelectPickup = () => {
      setselectPart(true);
    }
    console.log(selectPart)
  return (
         <div className='topMiddleHeader w-[90%] flex justify-between items-center mx-auto mt-10'>
          <h3 className='md:text-[19px] text-[14px] font-bold'>Hello, Samanatha</h3>

          <div className='deliveryPickupBtn  h-[40px] bg-gray-300 cursor-pointer relative lg:w-[150px] sm:w-[140px] w-[100px] flex rounded-lg bg-white'>

            <div onClick={SelectDelivery} className={`w-[50%]  z-10 ${selectPart ? 'text-gray-600' : 'bg-yellow-500 text-white'}  h-full  rounded-l-lg text-center  font-semibold text-[12px] lg:text-[14px] flex items-center  justify-center`}>
              <ArchiveBoxIcon className={`h-6 ${selectPart ? 'text-gray-600' : ' text-white'} sm:hidden block text-`} />
              <span className='sm:block hidden'>Delivery</span>
            </div>

            <div onClick={SelectPickup} className={`w-[50%]   ${selectPart ? 'bg-yellow-500 text-white' : 'text-gray-600'}   rounded-r-lg  h-full flex justify-center items-center text-center font-semibold text-[12px] lg:text-[14px]`}>
              <TruckIcon className={`h-6 ${selectPart ? ' text-white' : 'text-gray-600'} sm:hidden block text-`} />
              <span className='sm:block hidden'>Pickup</span>
            </div>

          </div>

          <form className='lg:w-[300px] w-auto formclass lg:rounded-lg rounded-full  h-[40px] bg-white flex items-center  px-2'>
            <MagnifyingGlassIcon className='h-6 text-yellow-500 mr-0 lg:mr-2' />
            <input type="search" placeholder='What do you want to eat today?' className='w-full h-full bg-transparent lg:block hidden rounded-lg' name="" />
          </form>
        </div>
  )
}

export default TopMiddleHeader