
import ApexChart from '@/components/admin/ApexChart'
import StatusCard from '@/components/admin/StatusCard'
import React from 'react'

export default function page() {
  return (
    <div className='flex gap-4'>
      <StatusCard />
      <ApexChart />
      </div>
  )
}
