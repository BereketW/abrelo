import React from 'react'
import { FaFirstOrder } from 'react-icons/fa'
import { RiOrderPlayFill } from 'react-icons/ri'

export default function Support() {
  return (
    <div className='lg:px-24 md:px-16 sm:px-8 px-4 mt-20 shadow  my-10'>
        <h1 className='text-center text-3xl font-bold'>FAQs! Need Help?</h1>
        <h2 className='text-center text-2xl mb-4 font-bold'>The perfect area for you</h2>
        <div className='grid grid-cols-3 gap-4'>
            <div className='flex items-center justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <RiOrderPlayFill size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>
            <div className='flex items-center gap-4 justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <FaFirstOrder size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>
            <div className='flex items-center justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <FaFirstOrder size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>
            <div className='flex items-center justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <FaFirstOrder size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>
            <div className='flex items-center justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <FaFirstOrder size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>
            <div className='flex items-center justify-center flex-col hover:bg-gray-200 transition-all duration-200 hover:scale-105 h-[217px] shadow rounded-[40px] border border-primary-p'>
               <FaFirstOrder size={70}/>
               <h1 className='uppercase'>orders</h1>
            </div>


        </div>
    </div>
  )
}
