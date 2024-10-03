import React from 'react'
import Header from "../../components/Header"
import Support from "../../components/Support"
import HeroWrapper from '@/components/HeroWrapper'
import PathInfo from '@/components/PathInfo'
import { ThemeProvider } from 'next-themes'

export default function page() {

  return (
    <ThemeProvider enableSystem defaultTheme='light' attribute='class'>
        <HeroWrapper>
        <Header className="lg:px-12 xl:px-24 md:px-16 text-white sm:px-8 px-4"/>
        <PathInfo />
        </HeroWrapper>
        <Support />
    </ThemeProvider>
  )
}
