import React from 'react'
import {assets} from '../assets/assets'


const NavBar = ({setToken}) => {

  const handleLogout = () => {
    // Clear token from both localStorage and state
    localStorage.removeItem('token'); // Step 1: Remove from localStorage
    setToken(''); // Step 2: Clear from state
  };

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>handleLogout()} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar
