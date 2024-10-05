"use client";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeroWrapper from "@/components/HeroWrapper";
import PathInfo from "@/components/PathInfo";
import { ThemeProvider } from "next-themes";
// import { usePathname } from "next/navigation";
import React from "react";
export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="light"
      className="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4"
    >
      <HeroWrapper contact>
        <Header className="lg:px-12 text-white xl:px-24 md:px-16  sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>

      <div className="relative rounded dark:bg-[#262d34] shadow lg:shadow-none md:shadow-none bg-white lg:px-24 md:px-16 sm:px-8 px-8    lg:pt-20 xl:pt-20 md:pt-16 sm:pt-8  pt-4">
        <Contact />
      </div>
    </ThemeProvider>
  );
  // className="bg-hero text-white px-24 font-poppins"
}
