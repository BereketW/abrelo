"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Logo() {
  const { theme } = useTheme();
  const pathname = usePathname()

  return (
    <div>
      <Link href="/" className=" overflow-hidden h-[60px] flex gap-3 items-center font-bold ">
        {theme === "dark" ? (
          <Image
            src="/assets/logo.png"
            width={200}
            height={100}
            alt="dark-mode-logo"
            className="object-cover h-1/2"
          />
        ) : theme === 'light' && pathname === "/" ? (
          <Image
            src="/assets/logo.png"
            width={200}
            height={100}
            alt="light-mode-logo"
            className="object-cover"
          />
        ):(<Image
          src="/assets/logo-dark.png"
          width={200}
          height={200}
          alt="light-mode-logo"
          className="object-cover"
        />)}
      </Link>
    </div>
  );
}
