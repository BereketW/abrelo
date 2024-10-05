"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// import { Search } from "lucide-react";
import { getManyCategories } from "@/data/categories";
import Rating from "./Rating";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Search from "./Search";
import Skeleton from "react-loading-skeleton";

// import { useRouter } from "next/router";
// import { Router } from "next/router";
export default function ShopCategory({ categoryParam, setCategoryParam }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function getCategories() {
      try {
        setIsLoading(true);
        const allCategories = await getManyCategories();
        setCategories(allCategories);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCategories();
  }, []);
  return (
    <div className="md:w-full sm:w-full lg:w-auto xl:w-auto">
      <Search />
      <div className="dark:bg-[#282f36] flex justify-between lg:flex-col  gap-10 bg-white p-4 rounded mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex ml-5  font-semibold  hover:scale-105 hover:text-hero  transition-all duration-300 items-center gap-2 mb-3 text-primary"
                >
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Link
                      href={`/shop?category=${category.slug}`}
                      className="dark:text-[#aab8c5]"
                      htmlFor={category.name}
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Price</AccordionTrigger>
            <AccordionContent>
              <div>
                <input
                  type="checkbox"
                  name="All Prices"
                  value="All Prices"
                  className="outline-none text-black"
                />
                <label htmlFor="All Prices">All Prices</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Below $200"
                  value="Below $200"
                  className="outline-none text-black"
                />
                <label htmlFor="Below $200">Below $200 (145)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="$200 - $500"
                  value="$200 - $500"
                  className="outline-none text-black"
                />
                <label htmlFor="$200 - $500">$200 - $500 (1,885)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="$500 - $800"
                  value="$500 - $800"
                  className="outline-none text-black"
                />
                <label htmlFor="$500 - $800">$500 - $800 (2,276)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="$800 - $1000"
                  value="$800 - $1000"
                  className="outline-none text-black"
                />
                <label htmlFor="$800 - $1000">$800 - $1000 (12,676)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="$1000 - $1100"
                  value="$1000 - $1100"
                  className="outline-none text-black"
                />
                <label htmlFor="$1000 - $1100">$1000 - $1100 (13,123)</label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              <div className="flex itms-center gap-2">
                <input
                  type="checkbox"
                  name="All Prices"
                  value="All Prices"
                  className="outline-none text-black"
                />
                <label htmlFor="5">
                  <Rating rating={5} />
                </label>
              </div>
              <div className="flex itms-center gap-2">
                <input
                  type="checkbox"
                  name="Below $200"
                  value="Below $200"
                  className="outline-none text-black"
                />
                <label htmlFor="4">
                  <Rating rating={4} />
                </label>
              </div>
              <div className="flex itms-center gap-2">
                <input
                  type="checkbox"
                  name="$200 - $500"
                  value="$200 - $500"
                  className="outline-none text-black"
                />
                <label htmlFor="3">
                  <Rating rating={3} />
                </label>
              </div>

              <div className="flex itms-center gap-2">
                <input
                  type="checkbox"
                  name="$800 - $1000"
                  value="$800 - $1000"
                  className="outline-none text-black"
                />
                <label htmlFor="2">
                  <Rating rating={5} />
                </label>
              </div>
              <div className="flex itms-center gap-2">
                <input
                  type="checkbox"
                  name="$1000 - $1100"
                  value="$1000 - $1100"
                  className="outline-none text-black"
                />
                <label htmlFor="1">
                  <Rating rating={1} />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
