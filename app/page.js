import Banner from "@/components/Banner";
import Galleries from "@/components/Galleries";
import Model from "@/components/Model";
import Subheader from "@/components/Subheader";
import ProductCard from '@/components/ProductCard'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="w-screen bg-slate-300 min-h-[90vh]">
        <Banner />
      </div>
      <div className="w-screen bg-red-300">
        <Subheader
          title="Our Gallery"
          subtitle="All Bespoke"
          className="w-full max-w-5xl mx-auto bg-red-300 py-4"
        />
      </div>
      <div className="w-screen bg-slate-300 min-h-[50vh]">
        <Galleries />
      </div>
      <div className="w-screen bg-red-300">
        <Subheader
          title="Our Runway"
          subtitle="Taking you through our process"
          className="w-full max-w-5xl mx-auto bg-red-300 py-4"
        />
      </div>
      <div className="w-screen bg-slate-600 min-h-[70vh]">
        <Model />
      </div>
      <div className="w-screen bg-gray-900">
        <Subheader
          title="Top 8"
          subtitle="Take a dip look"
          className="w-full max-w-5xl mx-auto bg-gray-900 py-4"
          titleclass="text-white"
          subtitleclass="text-white"
        />
      </div>
      <div className="w-screen bg-gray-900 min-h-[100vh]">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 px-2 py-2">
          <ProductCard img="/banner1.jpg" />
          <ProductCard img="/banner2.jpg" />
          <ProductCard img="/banner1.jpg" />
          <ProductCard img="/banner2.jpg" />
          <ProductCard img="/banner1.jpg" />
          <ProductCard img="/banner2.jpg" />
          <ProductCard img="/banner1.jpg" />
          <ProductCard img="/banner1.jpg" />
        </div>
      </div>
      <div className="w-screen bg-lime-200">
        <Subheader
          title="Shirts"
          subtitle="Customized just for you"
          className="w-full max-w-5xl mx-auto bg-lime-200 py-4"
          titleclass="text-gray-900"
          subtitleclass="text-gray-900"
        />
      </div>
      <div className="w-screen bg-lime-200 min-h-[100vh]">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 px-2 py-2">
          <ProductCard img="/banner1.jpg" infoclass="bg-gray-500" />
          <ProductCard img="/banner2.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner1.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner2.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner1.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner2.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner1.jpg" infoclass="bg-gray-500"/>
          <ProductCard img="/banner1.jpg" infoclass="bg-gray-500"/>
        </div>
      </div>
    </main>
  );
}
