import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'
import OrderMenu from './OrderMenu'

const RightSidemore = () => {
  return (
    <div className='w-full h-full mt-5 rightsidemore'>
        <div className="userdata flex items-center justify-between">
            <div className="address">
                <h4 className='font-semibold text-[17px]'>Your Address</h4>
                <div className="flex items-center ">
                        <MapPinIcon className='h-5  text-yellow-500'/>
                        <p className='text-[12px] font-semibold'>Gharipathan, pokhara</p>
                </div>
            </div>
            <div className="change">
              <button style={{border:'1px solid #f8b602'}} className='text-[12px] px-2 border-2 border-yellow-500 font-semibold text-yellow-500 rounded-md'>change</button>
            </div>
        </div>

        <div className="defaultaddress">
          <p className='text-[12px] mt-5 text-gray-500'>Your default address for delivery</p>
          <div className="buttons space-x-3">
            <button className='buttonborder'>Add Details</button>
            <button className='buttonborder'>Add Note</button>
          </div>
        </div>
        <OrderMenu/>
    </div>
  )
}

export default RightSidemore