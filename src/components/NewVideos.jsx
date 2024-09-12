import Image from "next/image";
import React from "react";

export default function NewVideos() {
  return (
    <section className="py-14 border px-5 sm:px-10 md:px-12 md:py-32 lg:py-44 xl:py-48">
      <div className="justify-center  items-center gap-12  md:flex  ">
        <div className="lg:w-1/2 lg:h-1/2 md:w-2/3 md:h-1/2">
          {/* <img
            className="rounded w-full h-[400px] object-cover"
            src="https://i.ibb.co/NyDhLpC/Screenshot-from-2024-07-22-22-50-17.png"
            alt="Video Preview"
          /> */}
          <Image src={"/assets/abrelo-new.jpg"} height={100} width={200} alt="new-video" className="w-full object-cover h-[450px] rounded" />
        </div>
        <div className="md:w-1/3 lg:w-1/3 ">
          <div className="mb-8 ">
            <p className="text-primary mb-4 dark:text-white lg:text-2xl">New Videos!</p>
            <h3 className="text-2xl dark:text-white font-bold tracking-tight text-primary sm:text-3xl md:text-4xl xl:text-5xl">
              Every Friday at 9PM
            </h3>
          </div>
          <div className="pt-1 lg:text-lg lg:leading-8">
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-7">
                <a
                  className="group flex h-12 w-[80px] items-center justify-center rounded-lg bg-hero"
                  href="#"
                >
                  <svg
                    className="h-6 w-6 fill-white group-hover:animate-ring"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <div className="w-[350px]">
                  Remember to{" "}
                  <a
                    href="#"
                    className="font-bold text-primary transition-colors hover:text-accent"
                  >
                    turn on the notifications bell
                  </a>{" "}
                  so you’ll be informed when a new video is uploaded!
                </div>
              </div>
              <p>
                We really appreciate all your comments, likes, and suggestions, so
                keep them coming!
              </p>
            </div>
            <a
              className="inline-flex items-center gap-x-3 text-xs font-bold uppercase text-primary md:text-sm"
              href="#"
            >
              <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-primary">
                <svg role="img" className="h-[8px] w-[8px] fill-primary"></svg>
              </span>
              <span className="transition-colors dark:text-white hover:text-accent">
                See All Videos
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
