import React from "react";
import Videos from "./Videos";

export default function LatestVideos() {
  return (
    <>
      <div className="px-24 py-20 overflow-hidden">
        <span className="text-primary-p uppercase">abrelo hd</span>
        <h2 className="font-bold font-poppins text-6xl text-primary">
          Latest Videos
        </h2>
      </div>
      <Videos left={false} dark={false}/>
    </>
  );
}
