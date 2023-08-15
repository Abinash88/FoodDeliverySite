import React from 'react'

const GoMailSingleItem = ({item}) => {
  return (
    <div className='gomailSingleList'>
        <div className="top w-[90%] h-[70%] flex items-start justify-center">
                <div className="image w-[80px] h-[80px]">
                    <img src="" alt={item.name} />
                </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default GoMailSingleItem