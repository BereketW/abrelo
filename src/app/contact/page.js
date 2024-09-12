import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
export default function Page(){
    return (
        <ThemeProvider>
        <Header className="px-24"/>
        <div className="pt-20 px-20">
            <Contact />
        </div>
        </ThemeProvider>
    )
    // className="bg-hero text-white px-24 font-poppins" 
}