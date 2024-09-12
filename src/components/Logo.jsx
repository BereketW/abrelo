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
      <Link href="/" className="h-[20px] flex gap-3 items-center font-bold text-2xl">
        {theme === "dark" ? (
          <Image
            src="/assets/logo.png"
            width={200}
            height={200}
            alt="dark-mode-logo"
            className="object-cover"
          />
        ) : theme === 'light' && pathname === "/" ? (
          <Image
            src="/assets/logo.png"
            width={200}
            height={200}
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
