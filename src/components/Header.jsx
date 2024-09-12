// components/Nav.js
"use client"
import Logo from "./Logo";
import NavLink from "./NavLink";
import HeaderControls from "./HeaderControls";
import { useCart } from "@/store/cart";
import Rating from "./Rating";
import CartItem from "./CartItem";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

export default function Header({className=''}) {
  const {cartProducts, removeFromCart} = useCart()
  const [display, setDisplay] = useState(false)
  const pathname = usePathname()
  
  
  return (
    <header className="">
      <nav className={`relative ${className}    z-50 flex min-h-[64px] dark:text-white items-center justify-between py-1  lg:min-h-[90px] lg:py-4`}>
        <Logo />
        <ul className="  hidden gap-x-7 xl:gap-x-10 text-sm flex-cols font-bold lg:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/videos">Videos</NavLink>
          <NavLink href="#">Event</NavLink>

          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="#">Partners</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </ul>
      
        <HeaderControls display={display} setDisplay ={setDisplay}/>
        
      </nav>
      {display&&<div className={`z-50 text-black  dark:border-none dark:text-white ${pathname!=="/" ? " dark:bg-channel-dark ":""} p-4 flex flex-col w-[400px]   shadow-md bg-white  overflow-y-scroll absolute top-16 ${pathname === "/" ? "right-0" : "right-16 border border-gray-300 rounded"}`}>
      <Cart display={display} setDisplay={setDisplay}/>
      </div>}
    </header>
  )}
