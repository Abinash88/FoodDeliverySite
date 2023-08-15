import React from 'react'

const ItemSinglelist = ({item}) => {
  // console.log(item.image)
  return (
    <div className='itemsinglelist'>
        <div className="singleinner ">
            <img className='text-[14px] text-center' src={item.image.src} alt={item.name} />
            <h5 className='text-[12px] text-gray-500 text-center  font-semibold'>{item.name}</h5>
        </div>
    </div>
  )
}

export default ItemSinglelist