"use client";
import React, { useEffect, useState } from "react";
import CarouselButton from "./CarouselButton";
import Slider from "react-slick";
// import Loader from "./Loader";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Ri24HoursLine,RiArrowLeftCircleFill, RiArrowRightCircleFill, RiSkipLeftLine } from "react-icons/ri";
import { MoveLeftIcon } from "lucide-react";

export default function Videos({ left = true, dark }) {
  const [videos, setVideos] = useState([]);
  const [transform, setTransform] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  // const containerWidth = 450; // Width of each video container
  // const visibleVideos = 4; // Number of videos to be visible

  // const moveToRight = (num) => {
  //   if (transform > -(videos.length - visibleVideos) * containerWidth) {
  //     setTransform((prevTransform) => prevTransform - containerWidth);
  //   }
  //   addCount();
  // };
  // const addCount = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  // const minusCount = () => {
  //   setCount(count - 1);
  // };
  // const moveToLeft = (num) => {
  //   if (transform < 0) {
  //     setTransform((prevTransform) => prevTransform + containerWidth);
  //   }
  //   minusCount();
  //   console.log(count);
  // };
  const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const NEXT_PUBLIC_CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

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
  }, []);

  // if (loading) {
  //   return <Loader/>
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <Button styles=" -top-10 h-10 w-10 flex items-center justify-center border bg-white text-primary border-white   absolute" icon=<RiArrowRightCircleFill size={100}/>/>,
    prevArrow: <Button styles=" -top-10 left-10  h-10 w-10 flex items-center justify-center border bg-white text-primary border-white   absolute" icon=<RiArrowLeftCircleFill size={100}/>/>

  };

  
  function Button({onClick, icon, styles}){
    return(
      <button onClick={onClick} className={styles} >{icon}</button>
    )
  }
  return (
    // <div className=" ">
    //   <div className={`relative ${dark && "dark:bg-videos-dark"} lg:px-0 px-8 lg:ml-20 bottom-6`}>
    //     <div className=" bg-white dark:bg-videos-dark overflow-hidden ">
    //       <div
    //         className={`lg:pl-20 lg:translate-x-[${transform-100}px] translate-x-[${transform}px] transition-transform ease-[cubic-bezier(.57,.21,.69,1.25)] pt-8 flex  gap-4`}
    //         style={{
    //           transform: `translateX(${transform}px)`,
    //           transition: "transform 0.3s ease-in-out",
    //         }}
    //       >
    //         {videos.map((video) => (
    //           <div key={video.id.videoId} className="lg:p-4  z-50">
    //             <iframe
    //             className="lg:w-auto md:w-auto w-[450px]"
    //               src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
    //             ></iframe>
    //             <h2 className="mt-2">{video.snippet.title}</h2>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     {videos.length > visibleVideos && (
    //       <div
    //         className={`lg:h-full overflow-hidden ${dark ? "dark:bg-videos-dark" : "dark-bg-inherit"} transition-all duration-200 bg-white pt-4 text-lg font-bold absolute  ${
    //           left ? "-top-5 z-50 left-0" : "-top-5 lg:z-50 right-0"
    //         }`}e
    //       >
    //         <div className="flex gap-4">
    //           <CarouselButton
    //             onClick={moveToLeft}
    //             disabled={count === 0}
    //             direction={"left"}
    //           />
    //           <CarouselButton
    //             onClick={moveToRight}
    //             disabled={
    //              count === videos.length   }
    //             direction={"right"}
    //           />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="lg:px-24 md:px-16 sm:px-8 px-4 relative -top-10 bg-white">
      <Slider {...settings} >
        {videos.map((video) => (
          <div key={video.id.videoId} className="lg:p-4  z-50">
            <iframe
              className="lg:w-auto md:w-auto w-[450px]"
              src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
            ></iframe>
            <h2 className="mt-2">{video.snippet.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}
