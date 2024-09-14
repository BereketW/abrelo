import React from "react";
import Videos from "./Videos";

export default function LatestVideos() {
  return (
    <>
      <div className="lg:px-24 md:px-16 sm:px-8 px-4 py-20 overflow-hidden">
        <h2 className="text-sm uppercase text-primary-p leading-tighter md:text-base">abrelo hd</h2>
        <h3 className="leadin-none text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-none">
          Latest Videos
        </h3>
      </div>
      <Videos left={false} dark={false}/>
    </>
  );
}
