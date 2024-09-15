"use client"
import React, { useMemo } from 'react'
import CurrencyFormat from './CurrencyFormatter'
import Link from 'next/link'
import CartItem from './CartItem'
import { useCart } from '@/store/cart'
import { MoveRightIcon } from 'lucide-react'
import { RiCloseLine } from 'react-icons/ri'
// import { useCart } from '@/store/cart'

export default function Cart({display, setDisplay}) {

  const cartProducts =
    useCart((state) => state.cartProducts) ||
    localStorage.getItem("cart-products");
  console.log("hey cart",cartProducts)
  
  cartProducts.map(product=>{console.log(product)})
  const totalPrice = useMemo(() => {
    let total = 0;
    cartProducts.forEach((item) => {
      total += item.totalPrice;
    });
    return total;
  }, [cartProducts]);
  console.log("hey cart", cartProducts)
  // if(cartProducts.length === 0)  return null
  return (
    <div className="">
        <span className="flex  justify-between items-center">
          <h1 className="dark:text-white text-xl text-black font-bold">
            Cart Review
          </h1>
          <button onClick={()=>setDisplay(false)} className='w-9  border font-bold flex items-center justify-center dark:border-white  dark:border-2 border-black h-9 rounded-full '><RiCloseLine /></button>
        </span>
        <div className="grid gap-4 max-h-[350px] overflow-y-scroll oveflow-x-hidden w-full py-4 mt-10 ">
          {cartProducts.length > 0 ? (
         
            cartProducts.map((product) => (
              
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <div>
              <h1 className="flex items-center justify-center font-bold text-primary-p ">
                {" "}
                Cart Empty
              </h1>
        <div className='my-10'>
          <Link href={"/shop"} className='rounded dark:text-white dark:shadow-md dark:border-hero border inline-flex gap-3 left-1/2 relative -translate-x-1/2 bg-hero text-white px-6 py-3'>Go to shop <MoveRightIcon /></Link>
        </div>

            </div>
          )}
        </div>
        {cartProducts.length > 0 ? (
          <>
            <div className="flex justify-between text-xl my-5 font-bold">
              <h3 className="">Subtotal</h3>
              <p>
                <CurrencyFormat amount={totalPrice} />
              </p>
            </div>
            <footer>
              <div className="flex justify-between gap-4 w-full">
                <Link href="/carts">
                  <button className="bg-hero px-7 py-3 rounded text-white">
                    View Carts
                  </button>
                </Link>
                <Link href="/checkout">
                  <button className="bg-black px-7 py-3 rounded text-white">
                    Checkout
                  </button>
                </Link>
              </div>
            </footer>
          </>
        ) : (
          ""
        )}
      </div>
  )
}
