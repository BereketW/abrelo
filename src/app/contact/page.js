import Contact from "@/components/Contact";
import Header from "@/components/Header";
import React from "react";
export default function Page(){
    return (
        <>
        <Header className="px-24"/>
        <div className="pt-20 px-20">
            <Contact />
        </div>
        </>
    )
    // className="bg-hero text-white px-24 font-poppins" 
}