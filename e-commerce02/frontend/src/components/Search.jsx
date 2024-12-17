import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 flex '>
        <input type="text" placeholder='Search for products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '><FaSearch /></button>
    </div>
  )
}

export default Search