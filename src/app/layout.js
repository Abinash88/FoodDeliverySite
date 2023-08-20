"use client"

import RightHeader from '@/Components/RightHeader'
import Headers from '../Components/Headers'
import TopMiddleHeader from '@/Components/TopMiddleHeader'
import '../../src/app/globals.css'
import { createContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import axios from 'axios'

const Mycontext = createContext();


export default function RootLayout({ children }) {

  const [ToggleDarkMode, setToggleDarkMode] = useState(false);
  const [getRightHeader, setGetRightHeader] = useState(false);
  const [foodBookmark, setFoodBookmark] = useState([]);
  const [OrderMenu, setOrderMenu] = useState([]);

  const CheckRightHeader = () => {
    setGetRightHeader(!getRightHeader)
  }

  // Product bookmarks code start here 
  useEffect(() => {
    if (typeof (Storage) !== 'undefined') {
      const bookmark = JSON.parse(localStorage.getItem(`bookmarkItem`));
      setFoodBookmark(bookmark ? bookmark : []);
    }
  }, [])

  useEffect(() => {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('bookmarkItem', JSON.stringify(foodBookmark));
    }
  }, [foodBookmark])

  const BookmarkProduct = (id) => {
    if (!foodBookmark?.includes(id)) {
      setFoodBookmark([...foodBookmark, id]);
    } else {
      setFoodBookmark(foodBookmark.filter((ids) => ids !== id));
    }
  }
  // Product bookmarks code end here 

  // item added system code start here 
  useEffect(() => {
    if (typeof (Storage) !== 'undefined') {
      const items = JSON.parse(localStorage.getItem('AddItems'))
      setOrderMenu(items ? items : []);
    }
  }, []);

  useEffect(() => {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('AddItems', JSON.stringify(OrderMenu));
    }
  }, [OrderMenu])

  const AddedToOrderMenu = (id) => {
    if (typeof (Storage) !== 'undefined') {
      const items = JSON.parse(localStorage.getItem('AddItems'))
      if (!items?.includes(id)) {
        setOrderMenu([...OrderMenu, id])
      } else {
        setOrderMenu([...OrderMenu])
      }
    }

  }

  const DeleteOrderMenu = (id) => {
    console.log(id)
    setOrderMenu(OrderMenu.filter((ids) => ids !== id))
  }
  // item added system code end here 


  // fetching the api from the rapid api start here 
  const [MealBox, setMealBox] = useState([]);

  const FetchProduct = async () => {
    const options = {
      method: "GET",
      url: "https://the-mexican-food-db.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "9395885f24mshc736bf092fe659cp161156jsn55ef50ba8f8a",
        "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMealBox(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchProduct();
  }, []);
  // fetching the api from the rapid api start here 


  // dark mode function start here 
  const CreateDarkmode = () => {
    setToggleDarkMode(!ToggleDarkMode)
  }
  // dark mode function end here 


  // catagory section api fetchig start here 
  const CreateCatagory = async () => {
  }

  useEffect(() => {
    // CreateCatagory()
  }, []);
  return (
    <html lang="en">
      <Mycontext.Provider value={{ getRightHeader, CheckRightHeader, CreateDarkmode, ToggleDarkMode, BookmarkProduct, foodBookmark, AddedToOrderMenu, DeleteOrderMenu, OrderMenu, MealBox }}>
        <body className={`flex slider transition duration-300 h-[100vh] w-full overflow`}>
          <div>
            <Headers />
          </div>
          <div className={`${ToggleDarkMode ? 'bg-gray-700' : 'bg-gray-100'} slider flex flex-col bg-gray-100  flex-1 justify-start items-center`}>
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