// components/HeaderControls.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { usePathname } from "next/navigation";
import { useCart } from "@/store/cart";
import {useTheme} from "next-themes"
import { MenuIcon } from "lucide-react";
import { BsCart, BsCart2, BsCartFill, BsPerson } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
export default function HeaderControls({display, setDisplay, setHidden}) {
  const pathname = usePathname()
  const isHomepage = pathname === "/";
  const {cartProducts} = useCart()
  // const [theme, setTheme] = useState("light");
 // Light theme as default
//  const [darkMode, setDarkMode] = useState(()=>{
//   if (typeof window !== 'undefined') {
//     const saved = localStorage.getItem('darkMode');
//     return saved !== null ? JSON.parse(saved) : false;
//   }
//   return false; 
//  });

//  useEffect(()=>{
//   localStorage.setItem('darkMode', darkMode)
//   if(darkMode){
//     document.documentElement.classList.add('dark')
//   }
//   else{
//     document.documentElement.classList.remove('dark')
//   }
//  },[darkMode])


  return (
    <div className="flex h-10 jusify-center items-center  space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 ">
      
      <ThemeToggle />
      <div className="flex items-center">
        <Link className="block  xl:px-3" href="/profile">
         
          <BsPerson size={30}/>
        </Link>
      </div>

     {cartProducts.length && <Link href={"/cart"} onMouseEnter={()=> setDisplay(true)} className="flex cursor-pointer relative items-center">
        <span className={`${pathname ==="/"?"text-white bg-hero border-white":"text-dark border-black"} border-2 text-sm dark:bg-black  absolute -top-1 dark:border-white -right-3 font-bold p-2 flex items-center justify-center  rounded-full h-2 w-2`}>{cartProducts.length}</span>
       
        <BsCart2 size={28}/>
      </Link>}
      <button onClick={()=>setHidden(false)} className="lg:hidden outline-none px-4"><MenuIcon /></button>
    </div>
  );
}
