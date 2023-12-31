'use client'

import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as FullHeart } from '@heroicons/react/24/outline'
import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '@/app/layout'

const GoMailSingleItem = ({item}) => {
  const {ToggleDarkMode, BookmarkProduct, foodBookmark, AddedToOrderMenu} = useContext(Mycontext)


  return (
    <div className={`${ToggleDarkMode?'bg-gray-900':'bg-white'} gomailSingleList relative`}>
      
         { true ? 
          <div style={{backgroundColor:'#eb5757'}} className="absolute w-[80px] rounded-r-md text-[14px] pl-6 text-white h-[20px] top-5 left-0">
            {true ? `15% off` : ''}
          </div>:null
          }

          <div onClick={() => BookmarkProduct(item?.id)} className=" absolute right-3 cursor-pointer top-4">
            {!foodBookmark?.includes(item.id) ?
              <FullHeart className={`h-6 ${ToggleDarkMode? 'text-yellow-500':'text-gray-600'}`}/>
              :
              <HeartIcon className={`h-6 ${ToggleDarkMode? 'text-yellow-500':'text-red-600'}`}/>
            }
          </div>

        <div className="topbox">
                <div className="imagebox">
                    <img src={item?.image}  alt='' />
                </div>
        </div>

        <div className="bottombox flex justify-between items-center">
            <div className="namebox ">
                <h6 className={`${ToggleDarkMode?'text-gray-100':'text-gray-600'} font-semibold text-[12px]`}>{item?.title.substring(0, 20)}...</h6>
                <h6 className={`${ToggleDarkMode?'text-gray-100':'text-gray-600'} font-semibold text-[13px]`}><span className='text-yellow-500 '>$</span> {item.id}</h6>
            </div>
            <div className="addbutton flex justify-center items-center">
              <button onClick={() => AddedToOrderMenu(item.id)} className='bg-yellow-500 text-white hover:bg-yellow-600 px-3 py-2 rounded-md'>+</button>
            </div>
        </div>
    </div>
  )
}

export default GoMailSingleItem