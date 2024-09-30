"use client"
import { usePathname } from "next/navigation"
import React from "react"
export default function GetPathname({path}){
    const pathname = usePathname()
    return pathname === path

}