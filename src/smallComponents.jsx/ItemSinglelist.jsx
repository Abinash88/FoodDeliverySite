import { Mycontext } from '@/app/layout';
import React, { useContext } from 'react';

const ItemSinglelist = ({item}) => {
  const {ToggleDarkMode} = useContext(Mycontext)
  return (
    <div className={`cursor-pointer ${ToggleDarkMode?'bg-gray-600':'bg-white'} w-[100px] h-[100px] rounded-md`}>
        <div className=" py-[20px] flex flex-col items-center space-y-2"> 
            <img className='text-[14px] w-[50px] h-[50px] rounded-md text-center' src={item.image} alt={item.name} />
            <h5 className={`${ToggleDarkMode?'text-gray-100':'text-gray-600'} text-[12px]  text-center  font-semibold`}>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</h5>
        </div>
    </div>
  )
}

export default ItemSinglelist