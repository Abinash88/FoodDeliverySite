import React from 'react'

const GoMailSingleItem = ({item}) => {
  return (
    <div className='gomailSingleList relative'>
          <div className="absolute w-[30px] h-[20px] top-5 left-0">

            {item?.discount ? item.discount : ''}
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
            <div className="addbutton flex justify-center">
              <button className='bg-yellow-500 text-white px-3 py-[20px] rounded-md'>+</button>
            </div>
        </div>
    </div>
  )
}

export default GoMailSingleItem