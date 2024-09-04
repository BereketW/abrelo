import React from "react";
export default function LatestNews() {
  return (
    <section class="py-14 md:py-32 lg:py-44 xl:py-48">
      <div class="container">
        <div class="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 items-baseline justify-between sm:flex-row">
          <div class="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
            <h2 class="leadin-none text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">
              Latest News
            </h2>
            <div class="text-sm uppercase leading-tighter md:text-base">
              Unbox vlogs
            </div>
          </div>
          <div class="inline-flex items-center gap-x-3 text-xs font-bold uppercase text-primary md:text-sm">
            <span class="relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-primary dark:border-white">
              <svg
                role="img"
                class="h-[8px] w-[8px] fill-primary dark:fill-white"
              >
                <use xlink="assets/img/yt1/sprite.svg#chevron-right"></use>
              </svg>
            </span>
            <a
              class="text-primary hover:text-accent dark:text-white dark:hover:text-accent"
              href="_yt1-blog-grid.html"
            >
              Browse all posts
            </a>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-y-7 sm:gap-[30px]">
          <div class="col-span-full sm:col-span-6 lg:col-span-4">
            <figure class="group overflow-hidden bg-gray-900">
              <a href="_yt1-single.html">
                {/* <img
                  class="aspect-[37/24] h-full w-full max-w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-75"
                  src="assets/img/yt1/samples/post-img-1-370x240.jpg"
                  alt="Next month I’ll be unboxing the exclusive “Last of Them II” deluxe version"
                /> */}
              </a>
            </figure>
            <div class="relative -mt-20 mr-8 lg:mr-10">
              <div class="inline-flex bg-accent px-2 py-[6px] text-xs font-bold uppercase leading-none text-white">
                Previews
              </div>
              <div class="bg-white dark:bg-gray-800 p-6">
                <h2 class="mb-4 text-xl font-bold leading-6 lg:tracking-tighter">
                  <a
                    href="_yt1-single.html"
                    class="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent"
                  >
                    Next month I’ll be unboxing the exclusive “Last of Them II”
                    deluxe version
                  </a>
                </h2>
                <div class="text-sm">March 18, 2022</div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
