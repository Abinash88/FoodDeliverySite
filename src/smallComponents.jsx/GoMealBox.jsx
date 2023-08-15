import React from 'react'
import GoMailSingleItem from './GoMailSingleItem'

const GoMealBox = ({MealBox}) => {
  return (
    <div className="w-full">
    <div className='w-[600px]  h-[300px] overflow-auto flex rounded-lg '>
        {MealBox?.map((item) => {
            return (<>
                <GoMailSingleItem key={item.id} item={item}/>
            </>)
        })}
    </div>
    </div>

  )
}

export default GoMealBox