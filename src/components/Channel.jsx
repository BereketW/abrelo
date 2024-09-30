import { useEffect, useRef } from "react";
import gsap from "gsap";
// import _SplitText, {SplitText} from "gsap/SplitText";
// import _SplitText from "gsap-trial/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
// import { SplitText } from "gsap-trial/SplitText";
// import { SplitText } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Channel() {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // const split = new SplitText(paragraphRef.current, { type: "words" });
    gsap.from("split".words, {
      opacity: 0.15,
      stagger: 0.2,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        markers: true,
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: "#pin",
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="relative">
      <div className="relative isolate overflow-hidden pb-8 pt-16 after:absolute after:inset-x-0 after:top-0 after:bottom-16 after:-z-20 after:bg-gray-100 dark:after:bg-gray-800 sm:pb-10 sm:pt-20 after:sm:bottom-24 md:pb-12 md:pt-32 after:md:bottom-28 lg:pb-16 lg:pt-36 after:lg:bottom-44 xl:pt-48 xl:pb-20 after:xl:bottom-60">
        <div className="px-4 md:px-16 sm:px-8 lg:px-24">
          <div className="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 items-baseline justify-between sm:flex-row">
            <div className="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
              <h2 className="dark:text-white leading-none text-3xl font-bold tracking-tight text-primary sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl xl:leading-none">
                The Channel
              </h2>
              <div className="text-sm uppercase md:text-base text-primary-p">
                Abrelo HD
              </div>
            </div>
          </div>
          <div className="mb-8 grid gap-5 sm:mb-16 md:mb-20 md:grid-cols-2 md:gap-[30px] xl:mb-28 xl:-mt-3">
            <div
              id="paragraph"
              ref={paragraphRef}
              className="dark:text-white text-xl tracking-tighter text-primary md:text-2xl lg:text-3xl lg:leading-snug xl:text-3.5xl xl:leading-snug"
            >
              Reacting to the funniest and trendiest videos out there!
            </div>
            <div className="tracking-tighter md:text-lg text-primary-p lg:pl-[70px] xl:leading-8">
              I’ll show you all the funniest trends and viral moments! From the
              latest laugh-out-loud videos to the hottest memes, get ready for a
              fun-filled ride. Stay tuned to see it all and keep your day
              hilarious!
            </div>
          </div>
          <div className="block aspect-video">
            <Link
              href="https://youtu.be/ZKXE5PlfRko"
              className="group relative block h-full overflow-hidden bg-gray-900"
            >
              <img
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
                src="/assets/channel-banner.jpg"
                alt=""
              />
              <span className="absolute top-1/2 left-1/2 flex aspect-square w-14 -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-accent md:w-20">
                <svg
                  className="mr-[-3px] h-14 w-14 rounded-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect width="24" height="24" fill="white"></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z"
                      fill="#f70202"
                    ></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
