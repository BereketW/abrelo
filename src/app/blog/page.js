"use client";
import React, { useState, useEffect } from "react";
import Blog from "../../components/Blog.jsx";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header.jsx";
import HeroWrapper from "@/components/HeroWrapper.jsx";
import PathInfo from "@/components/PathInfo.jsx";
export default function Page() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews() {
      const res = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json"
      );
      const data = await res.json();
      setNews(data.articles);
    }
    getNews();
  }, []);
  return (
    <ThemeProvider
      className=" "
      attribute="class"
      enableSystem
      defaultTheme="light"
    >
     <HeroWrapper>
     <Header className="lg:px-12 text-white xl:px-24 md:px-16 sm:px-8 px-4" />
     <PathInfo />
     </HeroWrapper>

      <Blog news={news} />
    </ThemeProvider>
  );
}
