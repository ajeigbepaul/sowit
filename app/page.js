import Banner from "@/components/Banner";
import Galleries from "@/components/Galleries";
import Subheader from "@/components/Subheader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="w-screen bg-slate-300 min-h-[90vh]">
        <Banner />
      </div>
      <div className="w-screen bg-slate-300">
        <Subheader />
      </div>
      <div className="w-screen bg-slate-300 min-h-[50vh]">
        <Galleries />
      </div>
    </main>
  );
}
