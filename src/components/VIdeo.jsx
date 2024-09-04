import React from "react";

const Video = ({ videoId, title }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <iframe
        className="w-full h-64 object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title={title}
        frameBorder="0"
      ></iframe>
      <div className="mt-3 font-bold leading-tight">{title}</div>
    </div>
  );
};

export default Video;
