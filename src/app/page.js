"use client";
import Channel from "@/components/Channel";
import ChannelStatus from "@/components/ChannelStatus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestVideos from "@/components/LatestVideos";
import NewVideos from "@/components/NewVideos";
import Videos from "@/components/Videos";
import Image from "next/image";
import VideoOfTheMonth from "@/components/VideoOfTheMonth";
import LatestNews from "@/components/LatestNews";
import Cart from "@/components/Cart";
import { ThemeProvider } from "next-themes";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import ScrollBack from "@/components/ScrollBack";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger with proper cleanup
    const element = sectionRef.current;

    const scrollAnimation = gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center",
        markers: false, // Ensure this is set to false to remove the markers
        onEnter: () => setIsClicked(false),
      },
    });

    // Cleanup on unmount
    return () => {
      if (scrollAnimation) {
        scrollAnimation.scrollTrigger?.kill();
      }
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <div className="relative dark:bg-[#22282e] overflow-x-hidden ">
        <div
          ref={sectionRef}
          className="bg-hero-gradient  dark:bg-[#22282e]    h-svh text-white lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4"
        >
          <Header />
          <Hero />
        </div>
        <Videos left />
        <NewVideos />
        <Channel />
        <LatestVideos />
        <ChannelStatus />
        <LatestNews />
      </div>
      <ScrollBack clicked={isClicked} setIsClicked={setIsClicked} />
    </ThemeProvider>
  );
}
