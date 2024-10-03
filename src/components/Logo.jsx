"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Logo() {
  const { theme } = useTheme();
  const pathname = usePathname();

  // Determine which logo to display
 
  // if(theme === "light")return (
   
  //     <Link href="/" className="overflow-hidden h-[60px] flex gap-3 items-center font-bold">
  //       <Image
  //         src={'/assets/logo-dark.png'}
  //         width={200}
  //         height={200}
  //         alt="site-logo"
  //         className="object-cover transition-all duration-300 ease-in-out"
  //       />
  //     </Link>
    
  // );
  // else if(pathname === "/" && theme === "light" || "dark")
     return (
   
    <Link href="/"  className="  relative h-[60px] flex gap-3 items-center font-bold">
      <Image
        src={'/assets/logo.png'}
        width={200}
        height={200}
        alt="site-logo"
        className="object-cover transition-all duration-300 ease-in-out"
      />
      {/* <div className="w-5 h-5 rounded-full left-40 -top-2 opacity-60  bg-white absolute">

      </div> */}
    </Link>

  
);
  // else return (
   
  //   <Link href="/" className="overflow-hidden h-[60px] flex gap-3 items-center font-bold">
  //     <Image
  //       src={'/assets/logo.png'}
  //       width={200}
  //       height={200}
  //       alt="site-logo"
  //       className="object-cover transition-all duration-300 ease-in-out"
  //     />
  //   </Link>

  
// );
  
}
