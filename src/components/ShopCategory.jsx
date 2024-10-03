"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Search } from "lucide-react";
import { getManyCategories } from "@/data/categories";
export default function ShopCategory() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      categories;
      const allCategories = await getManyCategories();
      setCategories(allCategories);
    }
    getCategories();
  }, []);
  return (
    <div>
      <div className="relative flex bg-white p-4 border dark:bg-[#282f36] text-[#9097a7]  ">
        <input
          type="text"
          placeholder="Search... "
          className="pl-10 px-4 dark:bg-inherit text-sm outline-none py-1 rounded"
        />
        <Search className="absolute top-1/2  -translate-y-1/2" />
      </div>
      <div className="dark:bg-[#282f36]  bg-white p-4 rounded mt-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              {categories.map((category, index) => (
                <div key={index} className="flex items-center gap-2 mb-3 text-[#8686a7]">
                  <input
                    type="checkbox"
                    name={category.name}
                    value={category.name}
                    className="outline-none w-5 bg-hero border border-[#8686a7] h-5 rounded"
                  />
                  <label className="dark:text-[#aab8c5]" htmlFor={category.name}>{category.name}</label>
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
      </div>
    </div>
  );
}
