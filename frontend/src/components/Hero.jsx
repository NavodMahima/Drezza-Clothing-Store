import React from 'react'
import { assets } from '/assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row '>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        
        <div className='mr-0 text-[#414141]'>
          <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-lg md:text-xl'>Our Best Seller</p> 
          </div>
          <h1 className='text-5xl sm:py-3 lg:text-7xl leading-relaxed'>Latest Arrivals</h1> 
          <div className='flex items-center gap-2'>
              <p className='font-semibold text-lg md:text-xl'>Shop Now</p> 
              <p className='font-medium text-lg md:text-xl bg-[#414141]'></p>
          </div>
        </div>

      </div>
      {/* Hero right side */}
      
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    
    </div>
  )
}

export default Hero
