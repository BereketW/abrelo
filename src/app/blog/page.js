"use client";
import React, { useState, useEffect } from "react";
import Blog from "../../components/Blog.jsx";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header.jsx";
import HeroWrapper from "@/components/HeroWrapper.jsx";
import PathInfo from "@/components/PathInfo.jsx";
import { getManyBlog } from "@/data/blogs.js";
export default function Page() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getNews() {
      try {
        setIsLoading(true);
        const res = await getManyBlog();
        console.log(res);
        setNews(res.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
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
      <HeroWrapper blog>
        <Header className="lg:px-12 text-white xl:px-24 md:px-16 sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>

      <Blog error={error} isLoading={isLoading} news={news} />
    </ThemeProvider>
  );
}
