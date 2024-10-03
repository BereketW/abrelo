"use client"
import React, { useEffect, useState } from 'react'
import VideosHeader from '../../components/VideosHeader'
import Header from '../../components/Header'
import PathInfo from '@/components/PathInfo'
import HeroWrapper from '@/components/HeroWrapper'
export default function Page() {
    const [videos, setVideos] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=UCHxhjHSPRdm837kwfL8hIIA&part=snippet,id&order=date&maxResults=10`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const json = await response.json();
            // console.log(json);
            setVideos(json.items);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
        getData();
      }, []);
   
  return (
    <div className="">
        <HeroWrapper>
        <Header className="lg:px-12 text-white xl:px-24 md:px-16  sm:px-8 px-4" />
        <PathInfo />
      </HeroWrapper>
        {/* <VideosHeader /> */}
        <div className='grid lg:px-12 xl:px-24 md:px-16 sm:px-8 px-4 mt-16 grid-cols-12 gap-y-14  sm:gap-x-[30px]'>
        {videos.map((video) => (
              <div key={video.id.videoId} className="col-span-full sm:col-span-6 lg:col-span-3">
                <iframe
                className='aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75'
                  src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
                ></iframe>
                <h2 className="my-3 font-bold leading-tight text-primary dark:text-white">{video.snippet.title}</h2>
              </div>
            ))}
        </div>
        </div>
  )
}
