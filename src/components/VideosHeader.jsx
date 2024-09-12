import React from "react";

export default function VideosHeader() {
  return (
   <ul className="relative px-24 z-10 items-start md:items-stretch flex flex-col py-4 md:py-0 md:flex-row md:gap-x-6 lg:gap-x-12 xl:gap-x-14 md:min-h-[100px] lg:min-h-[120px]">
        <li className="flex after:absolute after:h-1 md:after:bottom-0 after:bottom-1 after:bg-accent after:inset-x-0 relative">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-100 text-primary lg:text-primary dark:text-white dark:lg:text-white"
            href="#"
          >
            Newest
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Oldest
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Popular
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Most Liked
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Gaming
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Technology
          </a>
        </li>
        <li className="flex">
          <a
            className="flex items-center py-2 font-bold transition-all hover:text-primary dark:hover:text-white hover:opacity-100 text-sm lg:text-base opacity-40 dark:text-white/90"
            href="#"
          >
            Toys
          </a>
        </li>
      </ul>
     
    //   <div class="absolute inset-0 -left-full bg-white dark:bg-gray-800 shadow-3xl"></div>
   
  );
}
