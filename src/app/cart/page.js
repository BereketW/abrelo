import CartPage from '@/components/CartPage'
import Header from '@/components/Header'
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function page() {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} >
        <Header className ="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4" />

      <CartPage />
    </ThemeProvider>
  )
}
