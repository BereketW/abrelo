
import ApexChart from '@/components/admin/ApexChart'
import Orders from '@/components/admin/Orders'
import ProductsList from '@/components/admin/ProductsList'
import StatusCard from '@/components/admin/StatusCard'
import React from 'react'

export default function page() {
  return (
    <div  className='p-10 w-full'>
      <div className='flex gap-4'>
      <div className="w-[590px] text-[#5d7186] flex gap-2 flex-wrap items-start">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />

      </div>
        <ApexChart />
        </div>
        <Orders />
        <ProductsList />
    </div>
  )
}
