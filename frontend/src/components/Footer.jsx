import React from 'react'
import { assets } from '/assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* First Column - Logo and Description */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eos labore veritatis impedit est et unde. Cum ab sit, consectetur eaque explicabo dignissimos voluptatem similique voluptate molestias eius, necessitatibus dolorem?
            </p>
        </div>

        {/* Second Column - Company Links */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Third Column - Get in Touch */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94768083395</li>
                <li>navodmahima@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center font-bold flex flex-col sm:flex-1'>Copyright 2024@ Navod Mahima - All Right Reserved</p>
      </div>
    </div>
  )
}

{/* import React from 'react'
import { assets } from '/assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col-[1fr 1fr 1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src= {assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eos labore veritatis impedit est et unde. Cum ab sit, consectetur eaque explicabo dignissimos voluptatem similique voluptate molestias eius, necessitatibus dolorem?
                </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='text-gray-600'>Home</li>
                <li className='text-gray-600'>About Us</li>
                <li className='text-gray-600'>Delivery</li>
                <li className='text-gray-600'>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94768083395</li>
                <li>navodmahima@gmail.com</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
 */}

export default Footer;


