"use client"
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// import ProductCard from "@app/client/components/global/ProductCard";
// import { useSearchParams } from "next/navigation";

// import Message from "@app/client/components/global/Message";

import Rating from "@/components/Rating";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// import { getManyProducts } from "@app/client/data/products";
// import { getManycategories } from "@app/client/data/categories";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { ThemeProvider } from "next-themes";
export default  function WomenClothingCard({ searchParams }) {
  // console.log(searchParams);
  // const parameter = useSearchParams();
  // const category = parameter.get("category");
  // const { products } = await getManyProducts(searchParams.category);
  // console.log(products);
  // console.log("Search Param", searchParams);

  // console.log(categories);
  const [allProducts, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(()=>{
    async function getProducts(){
      const response = await fetch(`http://localhost:8000/api/products?page=${currentPage}&limit=12`)
    
      
      const data = await response.json()
      

      setProducts(data.products)
    }
    getProducts()
  })
  console.log(allProducts)
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} >
    <Header className="px-16" />
      <main className="px-24 my-10 mt-32">
        {/* <h1>{searchParams}</h1> */}
        {/* <h1 className="font-bold text-3xl mb-6">Explore Our Products</h1> */}
        <div className="grid grid-cols-4 gap-10">
          {allProducts.map((product) => {
            // const itemExist = itemsViewed.find(
            //   (cart) => cart.id === product.category.id
            // );
            // isLoading && <Loader key={product.category.id} />;
            return (
              <ProductCard key={product.id} product={product}>
                <Rating rating={product?.rating ?? 4} />
              </ProductCard>
            );
          })}
          
        </div>
        <div className="flex gap-8 my-20 items-center justify-center">
          <button disabled={allProducts.length <=0} onClick={()=>setCurrentPage(currentPage+1)}  className="text-hero font-bold"><MoveRightIcon /></button>
          <button  disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)} className="text-hero font-bold"><MoveLeftIcon /></button>
        </div>

      </main>
      {/* <Message /> */}
    </ThemeProvider>
  );
}
