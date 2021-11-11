import React from "react";

function Avatar({ url, className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`h-10 rounded-full cursor-pointer transition duration-50 transform hover:scale-110 animate-pulse ${className}`}
      src={url}
      loading="lazy"
      alt="profile img"
    />
  );
}

export default Avatar;
