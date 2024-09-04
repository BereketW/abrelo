
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

// components/NavLink.js
export default function NavLink({ href, children }) {
  const pathname = usePathname()
  return (
    <li>
      <Link
        className={`${pathname === href ? "border-b-2 border-white" :""
        }  relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
