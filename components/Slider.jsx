"use client"
import Image from "next/image";
function Slider({img}) {
  return (
    <div>
      <Image src={img} alt="bannerimg" width={900} height={750} className="w-screen h-[100vh] object-cover"/>
    </div>
  );
}

export default Slider;
