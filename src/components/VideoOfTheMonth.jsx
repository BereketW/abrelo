"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlayIcon } from "lucide-react";

export default function VideoOfTheMonth() {
    const {videos, setVideos} = useState(null)
    const hidden = "/admin" || "/support"
    useEffect(() => {
      async function getData() {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${NEXT_PUBLIC_API_KEY}&channelId=${NEXT_PUBLIC_CHANNEL_ID}&part=snippet,id&order=date&maxResults=40`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          const currentMonthVideos = data.items.filter(video => {
            const uploadDate = new Date(video.snippet.publishedAt);
            const month = uploadDate.getMonth(); // Get month (0 = January, 11 = December)
            const year = uploadDate.getFullYear();
            
            // Replace with the desired month and year
            return (month === 8 && year === 2024); // For September 2024
          });
        
          // Step 3: Fetch statistics (views) for each video
          const videoDetailsPromises = currentMonthVideos.map(video => fetchVideoDetails(video.id.videoId));
          const videosWithStats = await Promise.all(videoDetailsPromises);
        
          // Step 4: Find the video with the highest views
          const videoOfTheMonth = videosWithStats.reduce((maxVideo, currentVideo) => {
            return currentVideo.views > maxVideo.views ? currentVideo : maxVideo;
          });
          console.log("video",videoOfTheMonth)
          setVideos(videoOfTheMonth)
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      getData();
    });

   const pathname = usePathname()
  return (
    <div className={`${pathname === hidden ? "hidden":""} relative isolate -mb-20`}>
      <div className="container ">
        <div className="lg:pl-24 md:pl-16 sm:pl-8 pl-1 relative grid grid-cols-12 gap-x-7 bg-hero text-white">
          <div className="col-span-full flex flex-col justify-center gap-y-4 py-8 px-5 md:col-span-5 md:gap-y-6 md:py-10 md:px-0 lg:col-span-5 lg:py-0 xl:col-span-3">
            <div className="uppercase tracking-tighter">Abrelo Spotlight</div>
            <div className="text-4xl font-bold tracking-tight md:mb-5 md:text-5xl md:leading-[0.9em]">
              {videos}
              Video of the Month!
            </div>
          </div>
          <div className="col-span-full md:col-start-8 md:mr-[-1px] lg:col-start-8 xl:col-start-8">
            <a
              href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
              className="glightbox group relative block h-full overflow-hidden bg-gray-900 md:-ml-7"
            >
              <img
                src="/assets/abrish-new.jpg"
                alt="Video of the Month"
                width={200}
                height={100}
                className="w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
              />
              <span className="absolute top-1/2 left-1/2 flex bg-hero aspect-square w-[60px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full ">
<PlayIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-1/2 bottom-0 -z-10 h-full w-1/2 bg-hero"></div>
    </div>
  );
}
