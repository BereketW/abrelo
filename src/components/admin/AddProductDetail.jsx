import { CloudDownload, CloudUpload } from 'lucide-react'
import React from 'react'

export default function AddProductDetail() {
  return (
    <div>
        <div className='border-dashed border-2 rounded flex flex-col w-2/3 items-center justify-center p-24 border-hero'>
        <CloudUpload />
        <h1>Drop Your Images Here or, <span className='text-hero'>Click to browse</span></h1>
        </div>
    </div>
  )
}
