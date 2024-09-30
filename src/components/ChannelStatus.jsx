"use client";
import React, { useEffect, useRef, useState } from "react";
import SvgMapPath from "./SvgMapPath";
import Image from "next/image";
import numeral from "numeral";
import Link from "next/link";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function ChannelStatus() {
  const [subscribers, setSubscribers] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        once:true,
        onEnter: () => setStartCounting(true), // Trigger counting on enter
        // onLeaveBack: () => setStartCounting(false), // Optional: Reset if scrolling back up
      },
    });
  }, []);
  console.log(sectionRef)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      const sub = data.items[0].statistics.subscriberCount;
      setSubscribers(sub);
    }
    getData();
  }, []);
  // console.log(subscribers);

  return (
    <section className="dark">
      <div className="isolate bg-white py-14 dark:bg-gray-900 md:py-32 lg:py-44 xl:py-48">
        <div className="container">
          <div className="relative flex aspect-[1000/560] w-full flex-col items-center justify-between">
            <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 xl:gap-y-12">
              <div className="flex flex-col-reverse items-center gap-y-2 text-center sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                <h2 className="leadin-none text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">
                  Subscribers <span className="text-hero">Live</span> Count
                </h2>
                <div className="text-sm uppercase leading-tighter md:text-base text-primary-p">
                  Abrelo HD
                </div>
              </div>
            </div>
            <div ref={sectionRef} className="text-2xl font-bold leading-none tracking-tighter text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-8xl xl:text-[120px]">
              {/* {numeral(subscribers).format("0,0")} */}
             { startCounting &&(<CountUp start={1} end={subscribers} duration={10} />)}
            </div>
            <div className="flex gap-4 md:gap-5">
              {/* <img
                className="w-8 shrink-0 self-start rounded-full md:w-10"
                src="assets/img/yt1/samples/user-1-40x40.jpg"
                alt=""
              /> */}
              <img
                src={"/assets/abrelo-new.jpg"}
                alt="abrelo"
                height={8}
                width={8}
                className="w-10 h-10 shrink-0 object-cover self-start rounded-full md:w-10"
              />
              <div className="flex-1 text-primary dark:text-white">
                <Link
                  href={"https://www.youtube.com/@abrelohd"}
                  className="font-bold leading-none text-primary dark:text-white md:text-lg md:leading-snug"
                >
                  <span className="text-hero">@</span>abreloHd
                </Link>
                <div className="text-xs leading-tighter md:text-sm">
                  on Youtube
                </div>
              </div>
            </div>
            <div className="absolute top-[4%] -z-10 aspect-[1000/532] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 1000 532"
              >
                <SvgMapPath />
                <circle className="fill-hero" cx="81" cy="132" r="3"></circle>
                <circle className="fill-hero" cx="157" cy="272" r="3"></circle>
                <circle className="fill-hero" cx="233" cy="234" r="3"></circle>
                <circle className="fill-hero" cx="246" cy="221" r="3"></circle>
                <circle className="fill-hero" cx="309" cy="362" r="3"></circle>
                <circle className="fill-hero" cx="322" cy="451" r="3"></circle>
                <circle className="fill-hero" cx="475" cy="119" r="3"></circle>
                <circle className="fill-hero" cx="500" cy="183" r="3"></circle>
                <circle className="fill-hero" cx="564" cy="170" r="3"></circle>
                <circle className="fill-hero" cx="843" cy="221" r="3"></circle>
                <circle className="fill-hero" cx="856" cy="413" r="3"></circle>
                <g transform="translate(855, 122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M99.355 62.682C92.348 88.825 65.469 104.339 39.318 97.334C30.859 95.068 23.521 90.714 17.69 84.987L0.0999985 86.729L7.519 70.5701C2.863 60.5221 1.564 48.849 4.656 37.315C11.663 11.173 38.542 -4.34196 64.693 2.66304C90.843 9.66804 106.362 36.539 99.355 62.682Z"
                    fill="#FF3D54"
                  ></path>
                  <path
                    transform="translate(28, 26)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.991 20.992H41.99V24.993C41.99 26.099 41.096 26.994 39.99 26.994C38.885 26.994 37.99 26.099 37.99 24.993V20.992H33.99C32.884 20.992 31.989 20.096 31.989 18.991C31.989 17.887 32.884 16.991 33.99 16.991H37.99V12.989C37.99 11.884 38.885 10.989 39.99 10.989C41.096 10.989 41.99 11.884 41.99 12.989V16.991H45.991C47.096 16.991 47.991 17.887 47.991 18.991C47.991 20.096 47.096 20.992 45.991 20.992ZM33.99 38.998C33.99 40.104 33.095 40.999 31.989 40.999C30.884 40.999 29.989 40.104 29.989 38.998V34.997C29.989 31.687 27.297 28.994 23.988 28.994H9.98699C6.67799 28.994 3.98599 31.687 3.98599 34.997V38.998C3.98599 40.104 3.09099 40.999 1.98599 40.999C0.881992 40.999 -0.0140076 40.104 -0.0140076 38.998V34.997C-0.0140076 29.481 4.47299 24.993 9.98699 24.993H23.988C29.503 24.993 33.99 29.481 33.99 34.997V38.998ZM16.988 20.992C11.474 20.992 6.98699 16.504 6.98699 10.989C6.98699 5.47299 11.474 0.983994 16.988 0.983994C22.502 0.983994 26.989 5.47299 26.989 10.989C26.989 16.504 22.502 20.992 16.988 20.992ZM16.988 4.98599C13.679 4.98599 10.987 7.67799 10.987 10.989C10.987 14.298 13.679 16.991 16.988 16.991C20.297 16.991 22.988 14.298 22.988 10.989C22.988 7.67799 20.297 4.98599 16.988 4.98599Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
