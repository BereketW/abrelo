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
import { CloseButton } from "react-toastify";
import { RiCloseLine } from "react-icons/ri";

export default function Header({className=''}) {
  const {cartProducts, removeFromCart} = useCart()
  const [display, setDisplay] = useState(false)
  const pathname = usePathname()
  const [hidden, setHidden] = useState(true)
  
  
  return (
    <header className="">
      <nav className={`relative ${className}    z-50 flex min-h-[64px] dark:text-white items-center justify-between py-1  lg:min-h-[90px] lg:py-4`}>
        <Logo />
        {/* <ul className=" lg:p-0  absolute lg:static tranlate-x-[120%] lg:h-auto h-svh z-50 top-0 p-12 rounded lg:w-auto w-full  lg:text-white text-primary lg:bg-inherit bg-white lg:gap-x-7 xl:gap-x-10 text-sm flex-cols font-bold lg:flex"> */}
        <ul className={`lg:p-0 ${hidden ? "translate-x-[10000%] " : "translate-x-0"} lg:translate-x-0 lg:text-inherit transition-all duration-500 ease-[cubic-bezier(.57,.21,.69,1.25)] text-primary dark:lg:text-inherit dark:lg:bg-inherit fixed lg:static lg:h-auto h-svh z-50 top-0 right-0 p-12 rounded lg:w-auto w-full lg:bg-inherit bg-white dark:bg-primary dark:text-primary-p lg:gap-x-7 gap-x-7 xl:gap-x-10 text-sm flex-cols font-bold lg:flex`}>
        <div className="w-full flex lg:hidden justify-end">
          <button onClick={()=>setHidden(true)} className='w-9  relative -top-10  border font-bold flex items-center justify-center dark:border-white dark:border-2 border-black h-9 rounded-full '><RiCloseLine /></button>
          
        </div>  
          <NavLink href="/">Home</NavLink>

          <NavLink href="/videos">Videos</NavLink>
          <NavLink href="#">Event</NavLink>

          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="#">Partners</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </ul>
      
        <HeaderControls setHidden = {setHidden} display={display} setDisplay ={setDisplay}/>
        
      </nav>
      {display&&<div className={`z-50 text-black  dark:border-none dark:text-white ${pathname!=="/" ? " dark:bg-channel-dark ":""} p-4 flex flex-col w-[400px]   shadow-md bg-white  overflow-y-scroll absolute top-16 ${pathname === "/" ? "right-0" : "right-16 border border-gray-300 rounded"}`}>
      <Cart display={display} setDisplay={setDisplay}/>
      </div>}
    </header>
  )}
