"use client";
import About from "@/components/About";
import AboutBanner from "@/components/AboutBanner";
import Header from "@/components/Header";
import HeroWrapper from "@/components/HeroWrapper";
import PathInfo from "@/components/PathInfo";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import React from "react";
export default function Page() {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
      <HeroWrapper>
        <Header className="text-white  sticky top-0  lg:px-12 xl:px-24 dark:bg-inherit md:px-16 sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>
      <AboutBanner />
      <About />
    </ThemeProvider>
  );
}
