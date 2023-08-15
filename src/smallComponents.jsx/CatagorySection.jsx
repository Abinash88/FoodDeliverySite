import React from 'react'
import { Catagory } from '@/DataSource/DataSourceBox'
import ItemSinglelist from './ItemSinglelist'
import TopNameHeader from './TopNameHeader'

const CatagorySection = () => {
  return (
    <div className=''>
       <TopNameHeader names={'Catagory'} />
        <div className="CatagoryBox ">
            {
                Catagory?.map((item) => {
                    return (
                        <>
                            <ItemSinglelist key={item.key} item={item}/>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CatagorySection