"use client";
import ProductCard from "@/components/ProductCard";
import Rating from "@/components/Rating";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import Header from "@/components/Header";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the skeleton CSS
import { getManyProducts } from "@/data/products";
import ShopHeader from "@/components/ShopHeader";
import ShopCategory from "@/components/ShopCategory";
import { usePathname } from "next/navigation";
import HeroWrapper from "@/components/HeroWrapper";
import PathInfo from "@/components/PathInfo";

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
      const products = await getManyProducts();
      setProducts(products.products);
      console.log("Fetched Products", products);
    }
    fetchProduct();
  }, []);

  console.log(allProducts);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <HeroWrapper>
        <Header className="lg:px-12 xl:px-24 text-white md:px-16 sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>
      <div className="w-full  bg-[#f9f7f7] dark:bg-inherit">
        {/* <div className="text-white bg-hero text-2xl font-extrabold text-center ">{pathname}</div> */}
        <main className="lg:px-24 w-full md:px-16 sm:px-8 px-4 flex items-start flex-col lg:flex-row  gap-10 mt-10  ">
          <ShopCategory />
          <div className="w-full">
            {/* <ShopHeader /> */}
            <div className=" w-full  flex flex-wrap items-center  gap-10">
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
        <div className="flex gap-8 my-20 items-center justify-center">
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
