"use client"
import About from "@/components/About";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
export default function Page(){
    return(
        <ThemeProvider attribute="class" enableSystem defaultTheme="light"><Header className="text-primary dark:bg-inherit  sticky top-0 bg-white lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4"/>
        <About /></ThemeProvider>
    )
}