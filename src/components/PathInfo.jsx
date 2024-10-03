"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function PathInfo() {
    const pathname = usePathname()
    const currentHeader = pathname.split('').slice(1)
  return (
    <div className="page-heading pt-8 pb-12 text-center md:pt-16 md:pb-28">
    <h1  className="relative mb-3 text-white text-3xl font-bold leading-tight tracking-tight md:text-5xl  text-center">{currentHeader[0].toUpperCase() + currentHeader.slice(1).join('')}</h1>
    <h2 className=" px-2.5 text-[0.75rem] text-center font-bold uppercase text-white">Home | {currentHeader}</h2>
</div>
  )
}
