"use client";
import Image from "next/image";
function ProductCard({ img,infoclass }) {
  return (
    <div className="flex relative items-center flex-col justify-center w-full md:w-[300px] hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 text-white shadow-md rounded-md overflow-hidden">
      <Image
        src={img}
        width={300}
        height={300}
        className="w-full object-cover"
        alt="productsimages"
      />
      <div className={`bg-blue-200 w-full py-4 px-2 ${infoclass}`}>
        <h2>Info here</h2>
      </div>
    </div>
  );
}

export default ProductCard;
