import { Mycontext } from '@/app/layout';
import React, { useContext } from 'react';

const ItemSinglelist = ({item}) => {
  const {ToggleDarkMode} = useContext(Mycontext)

  return (
    <div className={`cursor-pointer  w-[100px] h-[100px] bg-white rounded-md`}>
        <div className=" p-[20px]">
            <img className='text-[14px] text-center' src={item.image.src} alt={item.name} />
            <h5 className='text-[12px] text-gray-500 text-center  font-semibold'>{item.name}</h5>
        </div>
    </div>
  )
}

export default ItemSinglelist