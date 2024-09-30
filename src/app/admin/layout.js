import SideBar from '@/components/admin/SideBar'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'
import { Settings, TimerIcon } from 'lucide-react'
import { Play } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { BsBoxArrowDownRight, BsBoxArrowRight } from 'react-icons/bs'
import { RiNotification2Fill } from 'react-icons/ri'
const play = Play({ weight: ['400',  '700'], subsets: ["latin"] });

export const metadata = {
  title: "Admin | Abrelo HD",
  description: "Admin Page",
};
export default function RootLayout({children}) {
  return (
    <html>
      <body className={play.className}>
        <div className='flex justify-between overflow-hidden h-svh '>
            
               <SideBar />
           
            <div className='w-full  h-full self-end justify-self-end overflow-scroll   bg-[#f9f7f7]'>
                <div className='w-full sticky top-0 z-50 py-10 px-8 bg-[#262d34]'>
                  <nav className='flex justify-between items-center '>
                    <h1 className='text-2xl font-bold text-white'>Welcome</h1>
                    <ul className='flex gap-4 text-[#9097a7]'>
                      <li><ThemeToggle  size={20}/></li>
                      <li><RiNotification2Fill size={20}/></li>
                      <li><Settings  size={20}/></li>
                      <li><TimerIcon size={20} /></li>
                      <li>
                        <input type='text' placeholder='Search' className='bg-[#2c3238] px-4 py-1 rounded' />
                      </li>
                    </ul>
                  </nav>
                </div>
                {children}
            </div>
        </div>
      </body>
    </html>
  )
}
