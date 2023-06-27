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
        <Subheader title="Our Gallery" subtitle="All Bespoke" />
      </div>
      <div className="w-screen bg-slate-300 min-h-[50vh]">
        <Galleries />
      </div>
      <div className="w-screen bg-red-300">
        <Subheader
          title="Our Runway"
          subtitle="Taking you through our process"
        />
      </div>
      <div className="w-screen bg-slate-600 min-h-[70vh]">
        <Model />
      </div>
      <div className="w-screen bg-red-300">
        <Subheader title="Top 8" subtitle="Take a dip look" />
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
    </main>
  );
}
