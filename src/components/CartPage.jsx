"use client"
import React from 'react'
import Header from './Header'
import { ShoppingBag } from 'lucide-react'
import CartItem from './CartItem'
import { useCart } from '@/store/cart'

export default function CartPage() {
    const {cartProducts, removeFromCart} = useCart()
  return (
    <div>
        <Header />
        <div >
            <ul className='flex items-center gap-10 mt-24'>
                <li>Cart</li>
                <li>Address</li>
                <li>Payment</li>
            </ul>
            
        </div>
        <div className='flex gap-10'>
            <div className='p-10'>
               <div className='flex items-center justify-between'>
                   <h1><span><ShoppingBag /></span>Shopping Cart</h1>
               </div>
               <div>
                
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                
               </div>
            </div>
            <div>
                {cartProducts.map(product=>(
                    <CartItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </div>
  )
}
