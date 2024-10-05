"use client";

import Link from "next/link";
// import { jewelery } from "@app/client/api/products";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import React, { useEffect, useState } from "react";

import SearchedProductCard from "./SearchedProductCard";
import { CiSearch } from "react-icons/ci";
import { getManyProducts } from "@/data/products";
import { Search } from "lucide-react";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function getProducts() {
      const data = await getManyProducts();
      setProducts(data.products);
    }
    getProducts();
  }, []);
  const searchFilter = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searched.toLowerCase()) ||
      product.description.toLowerCase().includes(searched.toLowerCase())
  );

  function handleSetSearched(e) {
    setSearched(e.target.value);
  }

  function handleResetSearch() {
    setSearched("");
  }

  function handleOpenChange(open) {
    if (!open) {
      handleResetSearch();
    }
    setIsOpen(open);
  }

  return (
    <div className="">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <div
            onClick={() => setIsOpen(!open)}
            className="relative flex text-[#9097a7] px-4 py-2 dark:bg-[#22282e]"
          >
            <input
              type="text"
              placeholder="Search"
              className="pl-10 px-4 bg-inherit outline-none py-1 rounded"
            />
            <Search className="absolute top-1/2  -translate-y-1/2" />
          </div>
        </SheetTrigger>
        <SheetContent side="top" className="p-8 overflow-scroll">
          <div className="flex relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border w-full outline-none items-center dark:bg-inherit dark:border-gray-700 border-slate-200 rounded-md py-3 px-10 shadow-md focus:outline-none sm:text-sm"
              value={searched}
              onChange={handleSetSearched}
            />
            <CiSearch
              size={24}
              className="absolute pointer-events-none top-3 right-6"
            />
          </div>
          {searched ? (
            searchFilter.length > 0 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 place-content-center items-center py-4 mt-10">
                {searchFilter.map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`}>
                    <SearchedProductCard product={product} />
                  </Link>
                ))}
              </div>
            ) : (
              <h1 className="text-center my-20 text-2xl font-mono">
                No Results Found
              </h1>
            )
          ) : (
            <h1 className="text-center my-20 text-2xl font-mono">
              Start typing to search
            </h1>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
