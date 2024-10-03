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
      <HeroWrapper>
        <Header className="lg:px-12 text-white xl:px-24 md:px-16  sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>

      <div className="relative bg-white lg:mx-24 md:mx-16 sm:mx-8  dark:bg-inherit  -top-20 pt-20">
        <Contact />
      </div>
    </ThemeProvider>
  );
  // className="bg-hero text-white px-24 font-poppins"
}
