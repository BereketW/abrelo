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
const { theme, setTheme } = useTheme("light");

useEffect(() => {
  // On mount, check if there's a theme in localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme); // Apply the stored theme
  }
}, [setTheme]);

const handleThemeChange = (newTheme) => {
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme); // Save the theme in localStorage
};

  return (
    <div className="flex h-10 jusify-center items-center  space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 ">
      <div  className=" flex relative bottom-0">
        <label
          htmlFor="theme-toggle"
          className="relative inline-flex cursor-pointer items-end "
        >
          <input
            type="checkbox"
            checked={theme === 'dark'}
            id="theme-toggle"
            className="peer sr-only"
            onChange={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
          />
          <span className={`relative z-10 block h-6 w-11 rounded-full border-2 dark:border-white   after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-black dark:after:bg-white after:transition-transform peer-checked:after:translate-x-[20px]  ${isHomepage ? "border-white after:bg-white" : "after:bg-black border-black"}`}></span>

          <svg
            className="absolute  top-1 left-1 h-4 w-4 stroke-red-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="1.5" />
            <path
              d="M12 2V4"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 20V22"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 12L2 12"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M22 12L20 12"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19.7778 4.22266L17.5558 6.25424"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4.22217 4.22266L6.44418 6.25424"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6.44434 17.5557L4.22211 19.7779"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19.7778 19.7773L17.5558 17.5551"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className={`absolute top-1 right-1 h-4 w-4 ${isHomepage ? "stroke-white" : "stroke-black"} `}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#ffffff"
            />
          </svg>
        </label>
      </div>

      <div className="flex items-center">
        <Link className="block  xl:px-3" href="/profile">
         
          <BsPerson size={30}/>
        </Link>
      </div>

      <Link href={"/cart"} onMouseEnter={()=> setDisplay(true)} className="flex cursor-pointer relative items-center">
        <span className={`${pathname ==="/"?"text-white bg-hero border-white":"text-dark border-black"} border-2 text-sm dark:bg-black  absolute -top-1 dark:border-white -right-3 font-bold p-2 flex items-center justify-center  rounded-full h-2 w-2`}>{cartProducts.length}</span>
       
        <BsCart2 size={28}/>
      </Link>
      <button onClick={()=>setHidden(false)} className="lg:hidden outline-none px-4"><MenuIcon /></button>
    </div>
  );
}
