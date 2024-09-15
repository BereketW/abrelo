"use client"
import React from 'react'
import Header from './Header'
import { ShoppingBag } from 'lucide-react'
import CartItem from './CartItem'
import { useCart } from '@/store/cart'

export default function CartPage() {
    const {cartProducts, removeFromCart} = useCart()
  return (
    <div className="lg:px-24 mb-12 bg-gray-100 md:px-16 sm:px-8 px-4">
        <Header className=""/>
        <div className="flex items-center justify-center mb-16">
            <ul className='flex items-center gap-10 mt-24'>
                <li>Cart</li>
                <li>Address</li>
                <li>Payment</li>
            </ul>
            
        </div>
        <div className='flex gap-10'>
            <div className='p-10 grid bg-white rounded w-[450px] grid'>
               <div className='flex items-center mb-12 justify-between'>
                   <h1 className="flex items-center gap-4"><span className="text-hero"><ShoppingBag /></span>Shopping Cart</h1>
                   <h1 className="font-bold text-xl">{cartProducts.length} Items</h1>
               </div>
               
               <div>
                {cartProducts.map(product=>(
                    <CartItem flex={true} key={product.id} product={product}/>
                ))}
            </div>
            </div>
            
        </div>
    </div>
  )
}
