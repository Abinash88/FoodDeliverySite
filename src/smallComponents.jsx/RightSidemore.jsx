import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const RightSidemore = () => {
  return (
    <div className='w-full h-full mt-5'>
        <div className="userdata ">
            <div className="address">
                <h4 className='font-semibold text-[17px]'>Your Address</h4>
                <div className="flex items-center">
                        <MapPinIcon className='h-4 text-yellow-600'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSidemore