import React from "react";

export default function AboutBanner() {
  return (
    <div className="lg:px-12  xl:px-24 relative  md:px-16 sm:px-8 px-4 -top-10">
      <img
        src={"/assets/channel-banner.jpg"}
        width={100}
        height={20}
        alt="channel-banner"
        className="w-full shadow rounded h-52 object-cover"
      />{" "}
    </div>
  );
}
