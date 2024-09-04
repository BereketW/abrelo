import React from "react";
import SvgMapPath from "./SvgMapPath";

export default function Footer() {
  return (
    <footer id="site-footer" className="dark" >
      <div class=" px-36 bg-gray-900 py-24 pt-44 leading-8">
        <div class="container">
          <div class="grid grid-cols-12 gap-y-12 gap-x-7">
            <div class="col-span-full md:col-span-4 lg:col-span-3">
              <div>
                <h5 class="mb-5 mt-[4px] font-bold leading-none">
                  <img
                    class="mt-1 mb-4 hidden transition-opacity duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:block"
                    src="https://valkivid.dan-fisher.dev/assets/img/yt1/youtube.svg"
                    alt="YouTube Logo"
                  />
                  <span class="block text-1.5xl leading-[0.8em] tracking-tighter text-primary dark:text-white">
                    Abrhams's
                  </span>
                  <span class="block text-[34px] tracking-[-0.07em] text-hero">
                    ABRELO HD
                  </span>
                </h5>

                <p class="mb-11 text-sm text-primary-p  leading-6 tracking-tightest">
                  Bringing you the best unboxing videos of the latest
                  technology, games and toys!
                </p>
                <ul class="flex flex-wrap gap-8">
                  <li>
                    <a
                      class="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                      title="Facebook"
                    >
                      
                      <svg className="h-4 w-4"
                     stroke="#000000" stroke-linecap = "round" stroke-linejoin = "round"
                        fill="currentColor"
                        fill="#000000" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="a" d="M24,42.5V18.57a5.07,5.07,0,0,1,5.08-5.07h0c2.49,0,4.05.74,5.12,2.12"></path><line class="a" x1="19.7" y1="23.29" x2="29.85" y2="23.29"></line><path class="a" d="M7.48,5.5a2,2,0,0,0-2,2h0v33a2,2,0,0,0,2,2H40.52a2,2,0,0,0,2-2h0v-33a2,2,0,0,0-2-2H7.48Z"></path></g></svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                      title="Twitter"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                        id="Layer_2"
                        data-name="Layer 2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <defs></defs>
                          <path
                            class="cls-1"
                            d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                      title="Instagram"
                    >
                      <svg
                        className="h-4 w-4"
                        // fill="currentColor"
                        viewBox="0 0 48 48"
                        id="Layer_2"
                        data-name="Layer 2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <defs></defs>
                          <path
                            class="cls-1"
                            d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z"
                          ></path>
                          <path
                            class="cls-1"
                            d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z"
                          ></path>
                          <path
                            class="cls-1"
                            d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-primary transition-colors hover:text-hero dark:text-white dark:hover:text-hero"
                      href="#"
                      title="Youtube"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 48 48"
                        id="a"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <defs> </defs>{" "}
                          <g>
                            {" "}
                            <line
                              class="b"
                              x1="12"
                              y1="39"
                              x2="36"
                              y2="39"
                            ></line>{" "}
                            <rect
                              class="b"
                              x="4.5"
                              y="9"
                              width="39"
                              height="26"
                              rx="2"
                              ry="2"
                            ></rect>{" "}
                          </g>{" "}
                          <polygon
                            class="b"
                            points="29.8597 22 20.1403 16.404 20.1403 27.596 29.8597 22"
                          ></polygon>{" "}
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
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
                      href="_yt1-index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-events.html"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-videos-grid-4.html"
                    >
                      Videos
                    </a>
                  </li>
                  <li>Unbox
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-partners.html"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-blog-grid.html"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-contact.html"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      class="transition-colors text-primary hover:text-hero dark:text-white dark:hover:text-hero"
                      href="_yt1-about.html"
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
                    1,829,436
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
