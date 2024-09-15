import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
export default function Page(){
    return (
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light" className="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4">
        <Header className=""/>
        <div className="pt-20">
            <Contact />
        </div>
        </ThemeProvider>
    )
    // className="bg-hero text-white px-24 font-poppins" 
}