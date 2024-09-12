"use client"
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

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>

    <div className="relative overflow-x-hidden">
      <div className="lg:bg-hero-gradient dark:bg-primary bg-hero h-svh text-white lg:px-24 sm:px-8 md:px-16 px:4 ">
       <Header />
        <Hero />
      
      </div>
      <Videos left/>
      <NewVideos />
      <Channel />
      <LatestVideos />
      <ChannelStatus />
      <LatestNews />
      
    </div>
    </ThemeProvider>

  );
}
