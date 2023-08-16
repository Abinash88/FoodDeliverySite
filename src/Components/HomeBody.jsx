import CatagorySection from '@/smallComponents.jsx/CatagorySection'
import React from 'react'
import GoMealSpecial from './GoMealSpecial'
import GoMealBox from '@/smallComponents.jsx/GoMealBox'
import { MealBox } from '@/DataSource/DataSourceBox'

const HomeBody = () => {
  return (
    <div className=' mt-6'>
        <CatagorySection/>
        <GoMealSpecial GoMealBox={<GoMealBox MealBox={MealBox}/>}/>
    </div>
  )
}

export default HomeBody