'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../layout'
import SingleFavItem from '@/smallComponents.jsx/singleFavItem';
import GoMailSingleItem from '@/smallComponents.jsx/GoMailSingleItem';

const page = () => {
  const {foodBookmark, MealBox} = useContext(Mycontext);
  const [bookMarkItem, setBookmarkItem] = useState([]);
  useEffect(() => {
    const item = MealBox.filter((item) =>  foodBookmark?.includes(item?.id));
    setBookmarkItem(item);
  },[foodBookmark])
  console.log(bookMarkItem)
  return (
    <div className='flex-1 border w-full h-full overflow-auto pt-5'>
        <div className="GomealBox">
          {
            bookMarkItem?.map((item) => {
              return (
                <GoMailSingleItem key={item.id} item={item} />
              )
            })
          }
        </div>
    </div>
  )
}

export default page