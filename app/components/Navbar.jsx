import React from 'react'
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    // Navigation Bar
    <div className='bg-gray-100 w-full h-full flex flex-row justify-center rounded-3xl px-5'>
      <NavItem icon='majesticons:home-line' text='Home'/>
      <NavItem icon='majesticons:noteblock-text-line' text='Notes'/>
      <NavItem icon='majesticons:clipboard-check-line' text='Tasks'/>
      <NavItem icon='majesticons:settings-cog-line' text='Settings'/>
    </div>
  )
}

// Navigation Items
// Params: icon, text
const NavItem = ({ icon, text }) => {
  return (
    <div className='flex flex-row w-fit h-full items-center px-6 gap-2'>
      <Icon icon={icon} className='text-black w-6 h-6'/>
      <p className='text-black font-Raleway font-semibold text-base'>{text}</p>
    </div>
  )
}

export default Navbar