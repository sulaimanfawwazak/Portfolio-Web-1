import React, { useState } from 'react'
import { logo } from '../assets'

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='flex flex-row justify-between items-start'>
        {/* Logo */}
        <img src={logo} className='cursor-pointer h-5'/>

        {/* Menus */}
        <div className='hidden md:flex'>
          <ul className='flex flex-row'>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>About Me</li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Portfolio</li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li>
            <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Contact</li>
          </ul>
        </div>

        {/* Menus: Mobile */}
        <div className='lg:hidden'>
          {!toggle?
          // Menu Button
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6 cursor-pointer"
              onClick={() => setToggle(true)}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          :
          // Close Button
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6 cursor-pointer float-right"
              onClick={() => setToggle(false)}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
          {toggle?
            <ul className='flex flex-col mt-8 bg-gray-300 p-2 rounded-sm gap-2'>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>About Me</li>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Portfolio</li>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li>
              <li className='ml-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Contact</li>
            </ul>
          :null}
        </div>
      </div>
    </div>
  )
}

export default NavBar