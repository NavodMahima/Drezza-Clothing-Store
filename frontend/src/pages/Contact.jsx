import React from 'react'
import {assets} from '/assets/assets'
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox'


const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            54709 Willms Station <br /> Suite 350, Washington, DC
          </p>
          <p className='text-gray-500'>
            Tel: (415) 555-0132 <br /> Email: admin@forever.co
          </p>

          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>
          <button className='border border-black px-8 py-4 text-sm font-semibold hover:bg-black hover:text-white transition duration-300'>
            View Job Openings
          </button>
        </div>
      </div>

      <NewsLetterBox />


    </div>
  )
}

export default Contact
