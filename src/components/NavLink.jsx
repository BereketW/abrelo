"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components/NavLink.js
export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Check if it's the homepage
  const isActive = pathname === href && !isHomePage; // Check if the link is active and not the homepage

  return (
    <li>
      <Link
        className={`dark:hover:after:bg-white relative inline-flex items-center gap-x-2 leading-10 
          ${isActive ? "after:bg-black after:scale-x-100" : ""} 
          ${isHomePage ? "hover:after:bg-white" : "hover:after:bg-black"} 
          after:absolute after:bottom-[7px] after:left-0 after:h-[2px] 
          after:transition-transform after:w-full after:origin-right 
          hover:after:origin-left after:scale-x-0 hover:after:scale-x-100`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
