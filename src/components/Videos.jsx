"use client";
import React, { useEffect, useState } from "react";
import CarouselButton from "./CarouselButton";
// import Loader from "./Loader";

export default function Videos({ left = true, dark }) {
   const [videos, setVideos] = useState([]);
  const [transform, setTransform] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerWidth = 320; // Width of each video container
  const visibleVideos = 4; // Number of videos to be visible

  const moveToRight = () => {
    if (transform > -(videos.length - visibleVideos) * containerWidth) {
      setTransform((prevTransform) => prevTransform - containerWidth);
    }
  };

  const moveToLeft = () => {
    if (transform < 0) {
      setTransform((prevTransform) => prevTransform + containerWidth);
    }
  };
  const  NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY

  const NEXT_PUBLIC_CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID
  

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${NEXT_PUBLIC_API_KEY}&channelId=${NEXT_PUBLIC_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
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
  });

  // if (loading) {
  //   return <Loader/>
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  return (
    <div className=" ">
      <div className={`relative ${dark && "dark:bg-videos-dark"} ml-20 bottom-20`}>
        <div className=" bg-white dark:bg-videos-dark overflow-hidden ">
          <div
            className="pl-20 pt-8 flex gap-4"
            style={{
              transform: `translateX(${transform}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {videos.map((video) => (
              <div key={video.id.videoId} className="p-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
                ></iframe>
                <h2 className="mt-2">{video.snippet.title}</h2>
              </div>
            ))}
          </div>
        </div>
        {videos.length > visibleVideos && (
          <div
            className={`h-full overflow-hidden ${dark ? "dark:bg-videos-dark" : "dark-bg-inherit"} transition-all duration-200 bg-white pt-4 text-lg font-bold absolute  ${
              left ? "-top-5 z-50 left-0" : "-top-5 z-50 right-0"
            }`}e
          >
            <div className="flex gap-4">
              <CarouselButton
                onClick={moveToLeft}
                disabled={transform === 0}
                direction={"left"}
              />
              <CarouselButton
                onClick={moveToRight}
                disabled={
                  transform <= -(videos.length - visibleVideos) * containerWidth
                }
                direction={"right"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
