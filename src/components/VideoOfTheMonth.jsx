"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VideoOfTheMonth() {
  return (
    <div className="relative isolate -mb-20">
      <div className="container ">
        <div className="pl-36 relative grid grid-cols-12 gap-x-7 bg-hero text-white">
          <div className="col-span-full flex flex-col justify-center gap-y-4 py-8 px-5 md:col-span-5 md:gap-y-6 md:py-10 md:px-0 lg:col-span-5 lg:py-0 xl:col-span-3">
            <div className="uppercase tracking-tighter">Unbox Spotlight</div>
            <div className="text-4xl font-bold tracking-tight md:mb-5 md:text-5xl md:leading-[0.9em]">
              Video of the Month!
            </div>
          </div>
          <div className="col-span-full md:col-start-8 md:mr-[-1px] lg:col-start-8 xl:col-start-8">
            <a
              href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
              className="glightbox group relative block h-full overflow-hidden bg-gray-900 md:-ml-7"
            >
              <Image
                src="/assets/img/yt1/samples/spotlight-cover.jpg"
                alt="Video of the Month"
                width={500}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
              />
              <span className="absolute top-1/2 left-1/2 flex aspect-square w-[60px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-accent">
                <svg
                  role="img"
                  className="mr-[-3px] h-[22px] w-[18px] fill-white"
                >
                  <use xlinkHref="/assets/img/yt1/sprite.svg#play"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-1/2 bottom-0 -z-10 h-full w-1/2 bg-hero"></div>
    </div>
  );
}
