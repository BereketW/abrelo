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

export default function Home() {
  return (
    <div className="">
      <div className="bg-hero-gradient bg-hero text-white px-24 ">
        <Header  />
        <Hero />
      
      </div>
      <Videos left/>
      <NewVideos />
      <Channel />
      <LatestVideos />
      <ChannelStatus />
      <LatestNews />
      
    </div>
  );
}
