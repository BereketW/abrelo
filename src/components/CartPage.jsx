"use client"
import React, { useMemo } from 'react'
import Header from './Header'
import { ShoppingBag } from 'lucide-react'
import CartItem from './CartItem'
import { useCart } from '@/store/cart'
import { BsCardImage, BsSafe } from 'react-icons/bs'
import CurrencyFormat from './CurrencyFormatter'

export default function CartPage() {
    const {cartProducts, removeFromCart} = useCart()
    const totalPrice = useMemo(() => {
        let total = 0;
        cartProducts.forEach((item) => {
          total += item.totalPrice;
        });
        return total;
      }, [cartProducts]);
      return (
    <div className="lg:px-24 pb-12 bg-gray-100 md:px-16 sm:px-8 px-4">
        {/* <Header className=""/> */}
        <div className="flex items-center justify-center mb-16">
            <ul className='flex items-center gap-10 mt-24'>
                <li>Cart</li>
                <li>Address</li>
                <li>Payment</li>
            </ul>
            
        </div>
        <div className='lg:flex lg:px-24 justify-center gap-10'>
            <div className='lg:p-10 md:p-6 p-4 sm:mb-8 lg:w-2/3 bg-white rounded  grid'>
               <div className='flex items-center mb-12 justify-between'>
                   <h1 className="flex items-center gap-4"><span className="text-hero"><ShoppingBag /></span>Shopping Cart</h1>
                   <h1 className="font-bold text-xl">{cartProducts.length} Items</h1>
               </div>
               
               <div>
                <div className='overflow-x-scroll'>
                    {cartProducts.map(product=>(
                        <CartItem flex={true}  key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            </div>
            <div className='border-y-[10px] rounded-[10px] border-primary p-10'>
                <h1 className='font-bold text-lg text-center'>Order Summary</h1>
                <div className='my-6 flex justify-between items-center'>
                    <h3 className='flex text-primary gap-4 items-center'><BsCardImage /> Apply coupons</h3>
                    <button className='px-4 py-0.5 box-border rounded bg-primary uppercase text-white '>Apply</button>
                </div>
                <h1>Price Details ({cartProducts.length} items)</h1>
                <div className='flex justify-between items-center'>
                    <p className='text-primary-p'>Total Price</p>
                    <span><CurrencyFormat amount={totalPrice}/></span>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-primary-p'>Discount on items</p>
                <span><CurrencyFormat amount={0}/></span>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-primary-p'>Coupon Discount</p>
                <span><CurrencyFormat amount={totalPrice}/></span>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-primary-p'>Shipping Fee</p>
                <span><CurrencyFormat amount={100}/> free</span>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-primary font-medium'>Total Amount</p>
                <span><CurrencyFormat amount={totalPrice-100}/> free</span>
                </div>
                <button className='w-full p-3 bg-black my-6 rounded  text-white font-bold'>Place Order</button>
                <p className='flex items-center gap-4'><BsSafe />safe and secure payments. Easy returns. 100% authentic products</p>
            </div>
            
        </div>
    </div>
  )
}
