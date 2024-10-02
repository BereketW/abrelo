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

export default function WomenClothingCard({ searchParams }) {
  const [allProducts, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
  useEffect(()=>{
    async function fetchProduct(){
      const products = await getManyProducts()
      setProducts(products.products)
      console.log("Fetched Products", products)
    }
    fetchProduct()
  },[])

  console.log(allProducts);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Header className="lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4" />
      <main className="lg:px-24 md:px-16 sm:px-8 px-4 my-10 mt-32">
        <div className="grid  place-content-center border lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* {loading
            ? // Show skeleton loaders while loading
              Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={{ width: "300px", height: "340px" }}>
                  <Skeleton
                    width="100%"
                    height="50%"
                    baseColor={theme === "light" ? "#ebebeb" : "#333232"}
                    highlightColor="#f0f0f0"
                    style={{ borderRadius: "10px " }}
                  />
                  <Skeleton
                    width="30%"
                    height="10%"
                    baseColor={theme === "light" ? "#ebebeb" : "#333232"}
                    highlightColor="#f0f0f0"
                    style={{ borderRadius: "10px " }}
                  />
                  <Skeleton
                    width="40%"
                    height="10%"
                    baseColor={theme === "light" ? "#ebebeb" : "#333232"}
                    highlightColor=""
                    style={{ borderRadius: "10px " }}
                  />
                  <Skeleton
                    width="40%"
                    height="10%"
                    baseColor={theme === "light" ? "#ebebeb" : "#333232"}
                    highlightColor="#f0f0f0"
                    style={{ borderRadius: "10px " }}
                  />
                </div>
              ))
            :
             allProducts.map((product) => (
                <div
                  style={{ width: "300px", height: "400px" }}
                  key={product.id}
                > */}
          {/* <Suspense
                    fallback={
                      <Skeleton
                        width="100%"
                        height="100%"
                        baseColor="#e0e0e0"
                        highlightColor="#f0f0f0"
                        style={{ borderRadius: "10px" }}
                      />
                    }
                  > */}
          {allProducts.map((product) => (
            <ProductCard loading={loading} key={product.id} product={product}>
              <Rating rating={product?.rating || 4} />
            </ProductCard>
          ))}

          {/* </Suspense> */}
        </div>
        {/* ))} */}
        {/* </div> */}

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
      </main>
    </ThemeProvider>
  );
}
