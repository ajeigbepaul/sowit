import Banner from "@/components/Banner";
import Galleries from "@/components/Galleries";
import Model from "@/components/Model";
import Subheader from "@/components/Subheader";
import ProductCard from '@/components/ProductCard'
import WomenGalleries from "@/components/WomenGalleries";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="w-screen bg-slate-300 min-h-[90vh]">
        <Banner />
      </div>
      <div className="w-screen bg-gray-800">
        <Subheader
          title="Our Gallery"
          subtitle="4 MEN (All Bespoke)"
          className="w-full max-w-5xl mx-auto bg-gray-800 py-4"
          titleclass="text-orange-300"
          subtitleclass="text-white"
        />
      </div>
      <div className="w-screen bg-slate-300 min-h-[50vh]">
        <Galleries />
      </div>
      <div className="w-screen bg-gray-800">
        <Subheader
          title="Our Gallery"
          subtitle="ALL WOMEN (Where style meets class)"
          className="w-full max-w-5xl mx-auto bg-gray-800 py-4"
          titleclass="text-orange-300"
          subtitleclass="text-white"
        />
      </div>
      <div className="w-screen bg-slate-300 min-h-[50vh]">
        <WomenGalleries />
      </div>
      {/* <div className="w-screen bg-gray-800">
        <Subheader
          title="Our Runway"
          subtitle="Taking you through our process"
          className="w-full max-w-5xl mx-auto bg-gray-800 py-4"
          titleclass="text-orange-300"
          subtitleclass="text-white"
        />
      </div> */}
      <div className="w-screen bg-slate-600 min-h-[70vh]">
        <Model />
      </div>
      <div className="w-screen bg-gray-900">
        <Subheader
          title="Top 8"
          subtitle="Our African Print"
          className="w-full max-w-5xl mx-auto bg-gray-900 py-4"
          titleclass="text-white"
          subtitleclass="text-white"
        />
      </div>
      <div className="w-screen bg-gray-900 min-h-[100vh]">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:pl-12 md:px-0 px-2 gap-2 py-2">
          <ProductCard
            img="/banner1.jpg"
            title="Sweet shirt"
            price="3,000"
            discount="4,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner2.jpg"
            title="Sweet shirt"
            price="4,500"
            discount="5,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner1.jpg"
            title="Sweet shirt"
            price="40,500"
            discount="51,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner2.jpg"
            title="Sweet shirt"
            price="14,500"
            discount="15,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner1.jpg"
            title="Sweet shirt"
            price="1,500"
            discount="2,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner2.jpg"
            title="Sweet shirt"
            price="4,500"
            discount="5,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner1.jpg"
            title="Sweet shirt"
            price="4,500"
            discount="5,500"
            infoclass="text-black"
          />
          <ProductCard
            img="/banner1.jpg"
            title="Sweet shirt"
            price="4,500"
            discount="5,500"
            infoclass="text-black"
          />
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
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:pl-12 md:px-0 px-2 gap-2 py-2">
          <ProductCard
            img="/shirt1.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Sweet shirt"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt2.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Just say it"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt3.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Love all"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt4.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Indescribable"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt5.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Shirt it out"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt6.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Create awesome"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt7.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="Just made"
            price="4,500"
            discount="5,500"
          />
          <ProductCard
            img="/shirt9.jpg"
            infoclass="bg-white shadow-lg text-gray-700"
            title="All to him"
            price="4,500"
            discount="5,500"
          />
        </div>
      </div>
    </main>
  );
}
