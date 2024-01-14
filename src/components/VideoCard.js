import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow w-56">
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li> {statistics.viewCount} views </li>
      </ul>
    </div>
  );
};

// higher order component
export const AdVideoCard = ({ info }) => {
  return (
    <div style={{ border: "2px solid red" }}>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
