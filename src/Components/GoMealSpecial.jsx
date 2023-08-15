import GoMealBox from '@/smallComponents.jsx/GoMealBox'
import TopNameHeader from '@/smallComponents.jsx/TopNameHeader'
import React from 'react'

const GoMealSpecial = ({GoMealBox}) => {
  return (
    <div className='w-full mt-6'>
       <TopNameHeader names={'Go Meal Special'} />
       {GoMealBox}
    </div>
  )
}

export default GoMealSpecial