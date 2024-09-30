import {
  AlignVerticalDistributeCenter,
  BoxesIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsType } from "react-icons/bs";
import { FaFileInvoice, FaProductHunt } from "react-icons/fa";
import {
  RiDashboard2Fill,
  RiOrderPlayFill,
  RiSecurePaymentFill,
} from "react-icons/ri";

export default function SideBar() {
  const sideBarLinks = [
    { icon: RiDashboard2Fill, name: "Dashboard", href: "/" },
    { icon: FaProductHunt, name: "Products", href: "/products" },
    { icon: BsType, name: "Category", href: "/category" },
    { icon: BoxesIcon, name: "Inventory", href: "/inventory" },
    { icon: RiOrderPlayFill, name: "Orders", href: "/orders" },
    { icon: RiSecurePaymentFill, name: "Purchases", href: "#" },
    { icon: AlignVerticalDistributeCenter, name: "Attributes", href: "#" },
    { icon: FaFileInvoice, name: "Invoices", href: "#" },
    { icon: Settings, name: "Settings", href: "#" },
  ];
  return (
    <div className="mt-4">
      <ul>
        {sideBarLinks.map((sidebar) => (
          <li key={sidebar.name} className="flex hover:text-white transition-all duration-300 ease-linear mb-3 items-center gap-4">
            <sidebar.icon size={20}/>
            <Link href={sidebar.href}>{sidebar.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
