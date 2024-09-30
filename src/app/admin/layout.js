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
        <div className='flex  h-svh '>
            <div className='w-[17%] shadow h-full text-[#9097a7] fixed px-6 bg-[#262d34] '>
                <div className='flex mb-10  items-center  justify-between pt-5'>
                  <div className='w-1/2 relative right-2 '>
                    <Logo />
                  </div>
                  <BsBoxArrowRight size={30} color='gray'/>
        
                </div>
                <span className='text-sm text-primary-p '>General</span>
               <SideBar />
            </div>
            <div className='w-[83%] h-full self-end justify-self-end overflow-scroll fixed top-0 right-0  bg-[#f9f7f7]'>
                <div className='w-full sticky top-0 z-50 py-10 px-8 bg-[#262d34]'>
                  <nav className='flex justify-between items-center '>
                    <h1 className='text-lg text-white'>Welcome</h1>
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
