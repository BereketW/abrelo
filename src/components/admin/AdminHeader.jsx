"use client"
import React from "react";
import ThemeToggle from "../ThemeToggle";
import { RiNotification2Fill } from "react-icons/ri";
import { Search, Settings, TimerIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
    const pathname = usePathname()
  return (
    <div className="w-full sticky top-0 z-50 py-10 px-8 bg-[#f9f7f7]">
      <nav className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-Primary">{pathname === "/" ? "Welcome" : pathname}</h1>
        <div className="relative flex text-[#9097a7] px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 px-4  outline-none py-1 rounded"
            />
            <Search className="absolute top-1/2  -translate-y-1/2" />
          </div>
        <ul className="flex items-center gap-4 text-[#9097a7]">
          <li>
            <ThemeToggle size={20} />
          </li>
          <li>
            <RiNotification2Fill size={20} />
          </li>
          <li>
            <Settings size={20} />
          </li>
          <li>
            <TimerIcon size={20} />
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
