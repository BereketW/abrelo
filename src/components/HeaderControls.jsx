// components/HeaderControls.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HeaderControls() {
  // const [theme, setTheme] = useState("light");
 // Light theme as default
 const [darkMode, setDarkMode] = useState(false);

 useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
 })

  return (
    <div className="flex h-10 items-center  space-x-4">
      <div  className="relative bottom-0">
        <label
          htmlFor="theme-toggle"
          className="relative inline-flex cursor-pointer items-end "
        >
          <input
            type="checkbox"
            id="theme-toggle"
            className="peer sr-only"
            onChange={()=>setDarkMode(!darkMode)}
          />
          <span className="relative z-10 block h-6 w-11 rounded-full border-2 border-black after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-[20px]"></span>

          <svg
            className="absolute top-1 left-1 h-4 w-4 stroke-black"
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
            className="absolute top-1 right-1 h-4 w-4 stroke-black"
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
        <Link className="block py-4 px-2 xl:px-3" href="_yt1-account.html">
          <svg
            className="h-6 w-6 fill-black"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5" />
            <path
              d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      <div className="flex items-center">
        <svg
          className="h-6 w-6 fill-black"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
              stroke="#ffffff"
              stroke-width="1.5"
            ></path>
            <path
              d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
              stroke="#ffffff"
              stroke-width="1.5"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
