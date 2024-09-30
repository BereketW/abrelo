"use client"
import React, { useEffect, useState } from "react";
import SvgMapPath from "./SvgMapPath";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import numeral from "numeral";
// import { Link } from "lucide-react";

export default function Footer() {
  const [subscribers, setSubscribers] = useState();
  useEffect(()=>{
   async function getData(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await response.json()
    console.log(data)
    const sub = data.items[0].statistics.subscriberCount;
    setSubscribers(sub)
   }
   getData()
  
  }, [])

  return (
    <footer id="footer" className="dark " >
      <div class="px-2 lg:px-36 md:px-16 sm:px-8 xs:px-3 bg-gray-900 py-24 pt-44 leading-8">
        <div class="container">
          <div class="grid grid-cols-12 gap-y-12 gap-x-7">
            <div class="col-span-full md:col-span-4 lg:col-span-3">
              <div>
              <Link href="/" className="overflow-hidden relative -left-5 h-[60px] flex gap-3 items-center font-bold">
              
              <Image width={200} height={200} alt="logo" src={"/assets/logo.png"} />
              </Link>
              <SocialLinks footer={true}  className={"flex text-white  transition-color duration-200 my-4 items-center gap-10"}/>
                <p class="mb-11 text-sm text-primary-p  leading-6 tracking-tightest">
                  Bringing you the best unboxing videos of the latest
                  technology, games and toys!
                </p>
                
              </div>
            </div>
            <div class="col-span-full md:col-span-4 md:col-start-5">
              <div>
                <h4 class="mb-6 pt-[2px] font-heading text-lg font-bold leading-none text-primary dark:text-white md:mb-16">
                  Abrelo Links
                </h4>
                <ul class="grid grid-cols-2 gap-x-7 gap-y-3 font-base text-sm font-bold leading-normal">
                  <li>
                    <a
                      class="transition-colors text-hero dark:text-hero"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="/videos"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="Blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-shop-grid-3.html"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-full md:col-span-4 md:col-start-9">
              <div>
                <h4 class="mb-4 pt-[2px] font-heading text-lg font-bold leading-none text-primary dark:text-white md:mb-6">
                  Subs Live Count
                </h4>
                <div class="align-center relative isolate flex aspect-[1000/532] w-full flex-col justify-center pb-4 text-center">
                  <div class="mb-3 font-heading text-2.5xl font-bold tracking-tighter text-primary dark:text-white">
                  {numeral(subscribers).format("0,0")}

                  </div>
                  <div class="text-sm font-bold text-primary dark:text-white">
                    <span class="text-hero">@</span>
                    abreloHD
                  </div>

                  <div class="absolute top-0 -z-10 aspect-[1000/532] w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      viewBox="0 0 1000 532"
                    >
                      <SvgMapPath />
                      <circle class="fill-hero" cx="81" cy="132" r="3"></circle>
                      <circle
                        class="fill-hero"
                        cx="157"
                        cy="272"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="233"
                        cy="234"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="246"
                        cy="221"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="309"
                        cy="362"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="322"
                        cy="451"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="475"
                        cy="119"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="500"
                        cy="183"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="564"
                        cy="170"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="843"
                        cy="221"
                        r="3"
                      ></circle>
                      <circle
                        class="fill-hero"
                        cx="856"
                        cy="413"
                        r="3"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
