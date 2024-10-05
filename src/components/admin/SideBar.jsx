"use client";
import {
  AlignVerticalDistributeCenter,
  BoxesIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import {
  RiAlignItemVerticalCenterFill,
  RiBox1Line,
  RiCloseLine,
  RiDashboard2Fill,
  RiGroup2Fill,
  RiOrderPlayFill,
  RiProductHuntFill,
  RiSecurePaymentFill,
  RiSettings2Fill,
} from "react-icons/ri";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { FaBlog } from "react-icons/fa";

export default function SideBar({ show, setShow }) {
  const [shrink, setShrink] = useState(false);
  // New state for hover
  const pathname = usePathname();

  const sideBarLinks = [
    { icon: RiDashboard2Fill, name: "Dashboard", href: "/admin" },
    { icon: RiProductHuntFill, name: "Products", href: "/admin/products" },
    { icon: RiGroup2Fill, name: "Category", href: "/admin/category" },
    { icon: RiOrderPlayFill, name: "Orders", href: "/admin/orders" },
    { icon: FaBlog, name: "Blogs", href: "/admin/blogs" },

    { icon: RiBox1Line, name: "Inventory", href: "/admin/inventory" },
    { icon: RiSecurePaymentFill, name: "Purchases", href: "#" },
    { icon: RiAlignItemVerticalCenterFill, name: "Attributes", href: "#" },
    { icon: RiGroup2Fill, name: "Invoices", href: "#" },
    { icon: RiSettings2Fill, name: "Settings", href: "#" },
  ];

  return (
    <div
      className={`${
        shrink ? "w-[7%] " : "lg:w-[300px]  "
      } lg:static  shadow-md h-full  transition-all duration-200 text-[#9097a7] ${
        show ? "show" : "hide"
      }  hide-sidebar px-6 bg-[#262d34]`}
    >
      <div className="flex mb-10 items-center justify-between pt-5">
        <div className="w-2/3 relative right-2">{!shrink && <Logo />}</div>
        <div className="relative">
          <button
            onClick={() => setShrink(!shrink)}
            className={`${
              shrink ? " relative top-4 right-3" : ""
            } button-hide block outline-none`}
          >
            {shrink ? (
              <BsBoxArrowRight size={30} color="gray" />
            ) : (
              <BsBoxArrowLeft size={30} color="gray" />
            )}
          </button>
          <button
            onClick={() => setShow(false)}
            className="absolute inset-0 button-show hidden right-10"
          >
            <RiCloseLine size={30} />
          </button>
        </div>
      </div>
      {!shrink && <span className="text-sm text-primary-p">General</span>}
      <div className={`${shrink ? "mt-16" : "mt-4"}`}>
        <ul>
          {sideBarLinks.map((sidebar) => (
            <li
              key={sidebar.name}
              className={`hover:text-white ${
                pathname === sidebar.href ? "border-l-2 border-hero" : ""
              } transition-all duration-300 ease-linear mb-3`}
            >
              <Link className="flex items-center gap-4" href={sidebar.href}>
                <sidebar.icon size={shrink ? 35 : 20} />
                <p className={`${shrink ? "hidden" : ""}`}>{sidebar.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
