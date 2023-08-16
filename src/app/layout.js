"use client"

import RightHeader from '@/Components/RightHeader'
import Headers from '../Components/Headers'
import TopMiddleHeader from '@/Components/TopMiddleHeader'
import '../../src/app/globals.css'
import { createContext, useState } from 'react'

const Mycontext = createContext();


export default function RootLayout({ children }) {


  const [getRightHeader, setGetRightHeader] = useState(false);
  const CheckRightHeader = () => {
    setGetRightHeader(!getRightHeader)
  }

  console.log(getRightHeader)

  return (
    <html lang="en">
      <Mycontext.Provider value={{getRightHeader, CheckRightHeader}}>
        <body className={`flex h-[150vh] w-full overflow-x-hidden`}>
          <div>
            <Headers />
          </div>
          <div className='flex flex-col bg-gray-100  flex-1 justify-start items-center'>
            <TopMiddleHeader />
            {children}
          </div>
          <div>
            <RightHeader />
          </div>
        </body>
      </Mycontext.Provider>
    </html>
  )
}

export { Mycontext }