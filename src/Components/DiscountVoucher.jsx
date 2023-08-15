import React from 'react'

const DiscountVoucher = () => {
  return (
    <div className='discountvoucher w-[100%] h-[180px]'>
        <div style={{backgroundColor:'#f8b602'}} className=" roundcircle py-4 px-7 sm:px-10 flex flex-col justify-center h-[80%] sm:h-[95%] mt-7 rounded-xl mx-auto">
            <h2 className='sm:text-[20px] text-[18px] text-white  font-semibold'>Get Discount Voucher <br/> Up To 20%</h2>
            <p className='sm:text-[13px] text-[12px] pt-3 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam<br className='sm:block hidden'/> alias molestiae!</p>
        </div>
    </div>
  )
}

export default DiscountVoucher