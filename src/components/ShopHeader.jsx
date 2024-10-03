import React from 'react'

export default function ShopHeader() {
  return (
    <div className='w-full text-sm shadow bg-white dark:border-[#282f36] border flex justify-between items-center p-6 rounded'>
        <div>
            <h1 className='dark:text-[#aab8c5] text-sm'>Categories {">"} <span>All Products</span></h1>
            <span>Showing all 234 items result</span>
        </div>
    </div>
  )
}
