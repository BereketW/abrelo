"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Hero() {
  return (
    <div className="pl-24 flex gap-10 items-center -z-10 ">
      <div className="">
        <img
          class="mt-1 mb-4 hidden transition-opacity duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:block"
          src="https://valkivid.dan-fisher.dev/assets/img/yt1/youtube.svg"
          alt="YouTube Logo"
        />
        <h2 className="text-7xl mb-5 flex flex-col items-center font-bold leading-none lg:items-start">
          <span className="text-2xl lg:text-5xl md:text-3xl">
            {"Abrelo HD's"}
          </span>{" "}
          <span className="text-span">VIDEOS REACTION</span>
        </h2>
        <p className="w-1/2 overflow-hidden"></p>
        <div className="mb-8 pr-4 text-sm tracking-tighter text-white lg:mb-12 lg:text-lg lg:leading-8 xl:pr-20 w-2/3">
          {" "}
          Delivering the funniest, most entertaining reaction videos on the
          latest trends, tech, and more!
        </div>
        <Link
          href='https://youtube.com/@abrelohd?si=ZES3dj4eUGBbbZdd$Sub_Confirmation=1"'
          className="relative isolate inline-flex overflow-hidden border-2 bg-transparent py-3 px-4 text-center text-xs font-bold leading-none transition-colors before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 lg:py-[14px] lg:px-12 lg:text-sm py-3 px-4 lg:py-[14px] lg:px-12 bg-transparent border-2 border-white before:bg-white text-white lg:text-white hover:text-black"
        >
          Subscribe Now!
        </Link>
      </div>

      {/* Image in the center */}
      <img
        src="https://valkivid.dan-fisher.dev/assets/img/yt1/samples/hero-person.png"
        className="w-1/3 object-cover relative -top-20 -left-44"
        alt="Center Image"
      />
      {/* Videos around the image */}
      {/* <div>
            <iframe
              src="https://www.tiktok.com/@nuru_turki_dawa_official/video/7373173241839504646?is_from_webapp=1&sender_device=pc"
              width="300"
              height="400"
              frameborder="0"
            ></iframe>
          </div> */}
    </div>
  );
}

// pages/api/youtube.js
