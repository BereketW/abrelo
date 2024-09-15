"use client"
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function LatestNews() {
  const [news, setNews] = useState([])
  useEffect(()=>{
      async function getNews(){
          const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json")
          const data = await res.json()
          setNews(data.articles)
          articles.length = 4
      }
      getNews()
  },[])
  return (
    <section class="py-14 md:py-32 md:px-16 sm:px-8 px-4 lg:py-44 xl:py-48">
      <div class="container">
        <div class="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 items-baseline justify-between sm:flex-row">
          <div class="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
            <h2 class="leadin-none text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">
              Latest Blogs
            </h2>
            <div class="text-sm uppercase leading-tighter md:text-base">
              Abrelo Blogs
            </div>
          </div>
          <div class="inline-flex mb-10 items-center gap-x-3 text-xs font-bold uppercase text-primary md:text-sm">
            <span class="relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-primary dark:border-white">
          
             
                <ChevronRight />
             
            </span>
            <Link
              class="text-primary hover:text-accent dark:text-white dark:hover:text-hero"
              href="/blog"
            >
              Browse all posts
            </Link>
          </div>
        </div>
      <Blog news = {news} cut={true} />
      </div>
    </section>
  );
}
