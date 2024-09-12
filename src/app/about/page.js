"use client"
import About from "@/components/About";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
export default function Page(){
    return(
        <ThemeProvider><Header className="text-primary dark:bg-inherit  sticky top-0 bg-white px-24"/>
        <About /></ThemeProvider>
    )
}