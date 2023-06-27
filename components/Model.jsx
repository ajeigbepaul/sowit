"use client";
import Video from "../public/sowitvideo.mp4";
function Model() {
  return (
    <div className="h-[70vh] w-full">
      <video autoPlay loop className="h-full w-full object-cover">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Model;
