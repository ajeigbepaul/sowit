"use client"
import Image from "next/image";
function Gallery({ img }) {
  return (
    <div className="flex relative space-y-4 flex-shrink-0 items-center justify-center w-[250px] md:w-[300px] snap-center bg-slate-400 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden py-3 text-white px-4">
      <Image src={img} width={300} height={300} className="w-full object-cover" alt="galleryimages" />
    </div>
  );
}

export default Gallery;
