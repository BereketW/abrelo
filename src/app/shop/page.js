"use client";
import ProductCard from "@/components/ProductCard";
import Rating from "@/components/Rating";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import Header from "@/components/Header";
import { MoveLeftIcon, MoveRightIcon, Search } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the skeleton CSS
import { getManyProducts } from "@/data/products";
import ShopHeader from "@/components/ShopHeader";
import ShopCategory from "@/components/ShopCategory";
import { usePathname } from "next/navigation";
import HeroWrapper from "@/components/HeroWrapper";
import PathInfo from "@/components/PathInfo";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ToastContainer } from "react-toastify";

export default function WomenClothingCard({ searchParams }) {
  const [allProducts, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    async function getProducts() {
      // setLoading(true);
      // const response = await fetch(
      //   `http://localhost:3001/api/products?page=${currentPage}&limit=12`
      // );
      // const data = await response.json();
      // console.log(data);
      // setProducts(data.products);
      // setLoading(false);
    }
    getProducts();
  }, [currentPage]);
  useEffect(() => {
    async function fetchProduct() {
      const products = await getManyProducts(searchParams.category);
      setProducts(products.products);
      console.log("Fetched Products", products);
    }
    fetchProduct();
  }, []);

  console.log(allProducts);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <ToastContainer />
      <HeroWrapper shop>
        <Header className="lg:px-12 xl:px-24 text-white md:px-16 sm:px-8 px-4" />

        <PathInfo />

        <div className="absolute  -z-50  w-full h-full top-0 right-0">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="h-full transition-all duration-300 "
          >
            <SwiperSlide className="absolute inset-0 shop-bg-gradient">
              <div className="relative object-cover h-full w-full">
                <img
                  src="/assets/shop-1.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-2.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-90" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-3.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-4.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src="/assets/shop-5.jpeg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-[#212f42] opacity-80" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </HeroWrapper>

      <div className="w-full  bg-[#f9f7f7] dark:bg-[#262d34]">
        {/* <div className="text-white bg-hero text-2xl font-extrabold text-center ">{pathname}</div> */}
        <main className="lg:px-18 w-full md:px-12 sm:px-8 px-4 flex items-start flex-col lg:flex-row  gap-10 pt-10 ">
          <ShopCategory />
          <div className="w-full">
            {/* <ShopHeader /> */}
            <div className=" w-full  sm:px-20 px-14 lg:px-0 md:px-0 max-sm:grid-cols-1 min-sm:grid-cols-1 grid xl:grid-cols-4 max-md:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-8">
              {allProducts.map((product) => (
                <ProductCard
                  loading={loading}
                  key={product.id}
                  product={product}
                >
                  <Rating rating={product?.rating || 4} />
                </ProductCard>
              ))}
              {/* </Suspense> */}
            </div>
          </div>
          {/* ))} */}
          {/* </div> */}
        </main>
        <div className="flex gap-8 mt-20 pb-20 items-center justify-center">
          <button
            disabled={allProducts.length <= 0}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="text-hero font-bold"
          >
            <MoveRightIcon />
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="text-hero font-bold"
          >
            <MoveLeftIcon />
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}
