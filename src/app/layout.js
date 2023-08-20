"use client"

import RightHeader from '@/Components/RightHeader'
import Headers from '../Components/Headers'
import TopMiddleHeader from '@/Components/TopMiddleHeader'
import '../../src/app/globals.css'
import { createContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux'

const Mycontext = createContext();


export default function RootLayout({ children }) {

  const [ToggleDarkMode, setToggleDarkMode] = useState(false);
  const [getRightHeader, setGetRightHeader] = useState(false);
  const [foodBookmark, setFoodBookmark] = useState();

  const CheckRightHeader = () => {
    setGetRightHeader(!getRightHeader)
  }



  const BookmarkProduct = (id) => {
    if (typeof (Storage) !== 'undefined') {
      const bookmark = localStorage.getItem(`bookmark${id}`);
      if (!bookmark) {
        localStorage.setItem(`bookmark${id}`, true)
      } else {
        localStorage.setItem(`bookmark${id}`, !JSON.parse(bookmark))
      }
    }

    if (typeof Storage !== "undefined") {
      const bookmark = localStorage.getItem(`bookmark${id}`);
      setFoodBookmark(bookmark === true);
    }
  }

  console.log(foodBookmark);


  const CreateDarkmode = () => {
    setToggleDarkMode(!ToggleDarkMode)
  }

  return (
    <html lang="en">
      <Mycontext.Provider value={{ getRightHeader, CheckRightHeader, CreateDarkmode, ToggleDarkMode, BookmarkProduct, foodBookmark }}>
        <body className={`flex h-[100vh] w-full overflow`}>
          <div>
            <Headers />
          </div>
          <div className={`${ToggleDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex flex-col bg-gray-100  flex-1 justify-start items-center`}>
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