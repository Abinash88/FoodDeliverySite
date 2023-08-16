'use client'

import DiscountVoucher from '@/Components/DiscountVoucher'
import HomeBody from '@/Components/HomeBody'



export default function Home() {

 
  return (
    <main className="flex-1 homepageoverflow w-full h-full overflow-auto ">
      <div className='w-[90%] mx-auto '>
        <DiscountVoucher />
        <HomeBody />
      </div>

    </main>
  )
}

