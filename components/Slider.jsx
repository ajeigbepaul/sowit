"use client"
import Image from "next/image";
function Slider({img}) {
  return (
    <div>
      <Image src={img} alt="bannerimg" width={900} height={450} className="w-screen h-[90vh] object-cover"/>
    </div>
  );
}

export default Slider;
