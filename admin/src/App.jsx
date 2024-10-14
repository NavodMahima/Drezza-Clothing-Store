import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import List from './pages/List';
import Order from './pages/Order';


const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <NavBar/>
        <hr/>
        <div className='flex w-full'>
          <SideBar/>
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add/>} />
            <Route path='/list' element={<List/>} />
            <Route path='/orders' element={<Orders/>} />
          </Routes>
          </div>
        </div>
      </>
    </div>
  )
}

export default App 
