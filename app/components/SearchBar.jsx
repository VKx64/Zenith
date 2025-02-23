import React from 'react'
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    // Search Bar For Top Navigation
    <div className='bg-gray-100 w-1/4 h-full flex items-center gap-2 rounded-3xl px-5'>
      <Icon icon='majesticons:search-line' className='text-black w-6 h-6'/>
      <input className='bg-transparent font-Raleway text-base text-black placeholder-black font-semibold' placeholder='Search Here...' />
    </div>
  )
}

export default SearchBar