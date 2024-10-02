"use client";
import React, { Suspense } from "react";
import Rating from "./Rating";
import CurrencyFormat from "./CurrencyFormatter";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage, warningToast } from "@/lib/toasts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCard({ loading, product, children }) {
  const { addToCart, cartProducts } = useCart();
  const exist = cartProducts.find((cart) => cart.id === product.id);
  
  function handleAddToCart(product, e) {
    e.stopPropagation();
    if (exist) {
      warningToast();
    } else {
      showToastMessage();
      addToCart(product);
    }
  }

  return (
    <div className="group flex flex-col items-center border rounded-xl p-4 transition-all cursor-pointer">
      <div className="h-52 relative overflow-hidden w-full transition-all ease-in-out mb-3">
        <div className="p-4 w-full h-full">
          {loading ? (
            <Skeleton 
              width="100%" 
              height="100%" 
              style={{ borderRadius: "10px" }} 
            />
          ) : (
            <Link className="w-full" href={`shop/${product.id}`}>
              <img
                src={product.images[0].url}
                alt="image"
                className="scale-110 w-80 rounded group-hover:scale-125 transition-all ease-in-out duration-300 w-full object-cover h-36"
              />
            </Link>
          )}
        </div>

        <div className="flex z-0 translate-y-16 translate-x-20 transition-all duration-500 group-hover:translate-y-0 ease-in-out p-2 gap-4 items-center justify-center w-full absolute bottom-0 left-0">
          <button
            className="inline-block bg-hero z-10 px-5 py-2 bg-color-secondary rounded text-white text-sm"
            onClick={(e) => handleAddToCart(product, e)}
          >
            <svg
              className={`h-6 w-6 fill-white `}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full">
        <Suspense fallback={<Skeleton width="100%" />}>
          <p className="text-sm">{loading ? <Skeleton width="70%" /> : product.name.slice(0, 25)}</p>
        </Suspense>
        
        <Suspense fallback={<Skeleton width="100%" height={20} />}>
          {children}
        </Suspense>
        
        <Suspense fallback={<Skeleton width="100%" height={30} />}>
          <p className="flex gap-4 font-bold">
            <span className="text-primary-p line-through">
              {loading ? <Skeleton width="50%" /> : <CurrencyFormat amount={product.price + 10} />}
            </span>
            {loading ? <Skeleton width="50%" /> : <CurrencyFormat amount={product.price} />}
          </p>
        </Suspense>
      </div>
    </div>
  );
}
