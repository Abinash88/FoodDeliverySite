import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as FullHeart } from '@heroicons/react/24/outline'
import React from 'react'

const GoMailSingleItem = ({item}) => {
  return (
    <div className='gomailSingleList relative'>
      
         { item?.discount ? 
          <div style={{backgroundColor:'#eb5757'}} className="absolute w-[80px] rounded-r-md text-[14px] pl-6 text-white h-[20px] top-5 left-0">
            {item?.discount ? `${item.discount} off` : ''}
          </div>:null
          }

          <div className="WhislistBtn absolute right-3 cursor-pointer top-4">
            {item?.liked ?
              <HeartIcon className='h-6 text-red-500'/>
              :
              <FullHeart className='h-6 '/>
            }
          </div>

        <div className="topbox">
                <div className="imagebox">
                    <img src="" alt='' />
                </div>
        </div>

        <div className="bottombox flex justify-between items-center">
            <div className="namebox ">
                <h6 className='font-semibold text-[12px]'>{item?.name}</h6>
                <h6 className='font-semibold text-[13px]'><span className='text-yellow-500 '>$</span> {item?.price}</h6>
            </div>
            <div className="addbutton flex justify-center items-center">
              <button onClick={() => alert('Item Added Successfully')} className='bg-yellow-500 text-white hover:bg-yellow-600 px-3 py-2 rounded-md'>+</button>
            </div>
        </div>
    </div>
  )
}

export default GoMailSingleItem