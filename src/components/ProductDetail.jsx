"use client";
import { useCart } from "@/store/cart";
import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import { jewelery } from "@app/client/api/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper/modules";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import CurrencyFormat from "./currencyFormatter";
import Rating from "./Rating";
import CountQuantity from "./CountQuantity";

import { useCount } from "@/store/count";
import { BsCart2 } from "react-icons/bs";
import Loader from "./Loader";
import CurrencyFormat from "./CurrencyFormatter";
import { ThemeProvider } from "next-themes";
import HeroWrapper from "./HeroWrapper";
import Header from "./Header";
import PathInfo from "./PathInfo";
import ProductDetailPathInfo from "./ProductDetailPathInfo";

export default function ProductDetail({ singleProduct, children }) {
  console.log(singleProduct);
  const { addToCart, cartProducts } = useCart();
  // const images = jewelery.map((product) => product.image);
  const exist = cartProducts.find((cart) => cart.id === singleProduct?.id);
  // console.log(product);
  // images.length = 7;
  const { count } = useCount();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="">
      <HeroWrapper productDetail>
        <Header className="lg:px-12 xl:px-24 text-white md:px-16 sm:px-8 px-4" />
        <div className="absolute bg-hero-gradient -z-50 shop-bg-gradient w-full h-full top-0 right-0">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="h-full transition-all duration-300 "
          >
            {singleProduct.images.map((image) => (
              <SwiperSlide
                key={singleProduct.id}
                className="absolute inset-0 shop-bg-gradient"
              >
                <div className="relative object-cover h-full w-full">
                  <img src={image.url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ProductDetailPathInfo productName={singleProduct.name} />
      </HeroWrapper>
      <div className="py-24 w-full h-full dark:bg-[#262d34] lg:px-24  md:px-16  sm:px-8 px-4">
        <div className="lg:flex  w-full gap-10 justify-between">
          <div className="lg:w-1/2 h-2/6">
            <Swiper
              loop={true}
              spaceBetween={3}
              autoplay={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-72 "
            >
              {singleProduct.images.map((image) => (
                <SwiperSlide
                  key={singleProduct.id}
                  className=" flex items-center justify-center relative"
                >
                  <img
                    src={`${image.url}`}
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 object-contain h-full w-full rounded-md object-center -translate-y-1/2"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="m-4  h-full p-4 w-full flex "
            >
              {singleProduct.images.map((image) => (
                <SwiperSlide
                  key={singleProduct.id}
                  className="flex w-20 h-20 items-center rounded-md justify-center "
                >
                  <img src={`${image.url}`} className="w-20 h-20 " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-4 flex-col flex-1 justify-center">
            <h1 className=" text-slate-900 w-full text-balance dark:text-white font-extrabold text-4xl">
              {singleProduct.name.slice(0, 30)}
            </h1>
            <span className="px-2 py-1 text-sm self-start bg-color-primary text-white rounded-full">
              In stock
            </span>
            <div className="flex gap-4 text-2xl font-medium">
              <p className="text-gray-400 line-through">
                <CurrencyFormat amount={singleProduct.price + 100} />
              </p>
              <p>
                <CurrencyFormat amount={singleProduct.price} />
              </p>
            </div>
            <Rating rating={singleProduct.rating || 4} />
            <small>Description</small>
            <p className="text-base break-words lg:w-3/4 dark:text-primary-p text-gray-600">
              {singleProduct.description.slice(0, 270)}...
            </p>
            <div>
              <h1>
                Sizes:
                <br />
              </h1>
              <div className="flex items-center gap-4">
                {singleProduct.sizes.split(",").map((size) => (
                  <div
                    key={singleProduct.id}
                    className="ml-4 border p-4 w-15 mt-3 text-sm flex items-center justify-center h-10 rounded text-primary"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1>
                Colors:
                <br />
              </h1>
              <div className="flex items-center gap-4">
                {singleProduct.colors.split(",").map((color) => (
                  <div
                    key={singleProduct.id}
                    className={`border rounded mt-3 ml-4 w-10 h-10 p-2 text-primary `}
                  >
                    <div
                      className={`rounded-full w-full h-full   `}
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-10 mt-4">
              <CountQuantity />
              <button
                onClick={() => {
                  !exist && addToCart(singleProduct, count);
                }}
                className="flex gap-2 items-center bg-primary dark:hover:bg-hero hover:scale-110 transition-all ease-in-out duration-200 px-6 py-2 text-white rounded text-sm"
              >
                <BsCart2 size={20} /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
