import React from 'react'
import Title from '../components/Title'
import {assets} from '/assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Drezza, where style meets quality. At Drezza, we believe fashion should not only look good but feel great too. Our mission is to bring you the latest trends in fashion while ensuring that each piece in our collection is crafted with the utmost care and attention to detail.</p>
          <p>Founded with a passion for creativity and a commitment to exceptional customer experience, Drezza offers a diverse range of clothing, from casual wear to statement pieces, designed to fit every lifestyle and occasion. Whether you're looking to update your wardrobe or find that perfect outfit for a special event, we've got you covered.</p>
          <b className='text-gray-500'>Our Mission</b>
          <p>At Drezza, our mission is to inspire confidence and individuality through fashion. We are dedicated to offering trendy, high-quality clothing that allows everyone to express their unique style. We believe that fashion should be accessible, inclusive, and sustainable. That’s why we strive to provide a diverse range of clothing options for all body types, while ensuring our products are made with care for the environment. Our goal is to create an enjoyable shopping experience, empowering our customers to feel their best with every outfit they wear.
At Drezza, we are not just about clothing  we are about building a community where everyone can embrace their authentic selves through style.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'Why Make Us'} text2={'Defferent'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 space-y-5 md:space-y-0 md:space-x-5'>
    <div className='border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl px-8 py-6 flex flex-col gap-4 bg-white'>
        <b className='text-lg font-semibold text-gray-800'>Trendy Collections</b>
        <p className='text-gray-600'>Our team is constantly exploring new designs, bringing you the latest and freshest styles each season.</p>
    </div>
    <div className='border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl px-8 py-6 flex flex-col gap-4 bg-white'>
        <b className='text-lg font-semibold text-gray-800'>Quality Materials</b>
        <p className='text-gray-600'>We focus on sourcing the best fabrics and materials to ensure durability, comfort, and style.</p>
    </div>
    <div className='border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl px-8 py-6 flex flex-col gap-4 bg-white'>
        <b className='text-lg font-semibold text-gray-800'>Inclusive Sizing</b>
        <p className='text-gray-600'>We believe fashion is for everyone, which is why our collections come in a wide range of sizes to fit all body types.</p>
    </div>
    <div className='border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl px-8 py-6 flex flex-col gap-4 bg-white'>
        <b className='text-lg font-semibold text-gray-800'>Sustainability</b>
        <p className='text-gray-600'>At Drezza, we are committed to minimizing our environmental impact by adopting sustainable practices in our production processes.</p>
    </div>
</div>

    </div>
  )
}

export default about
