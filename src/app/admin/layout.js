import AdminHeader from '@/components/admin/AdminHeader'
import SideBar from '@/components/admin/SideBar'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'
import { Search, Settings, TimerIcon } from 'lucide-react'
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
                <AdminHeader />
                {children}
            </div>
        </div>
      </body>
    </html>
  )
}
