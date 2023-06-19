import React from 'react'
import Gallery from './Gallery';

function Galleries() {
  return (
    <div className="w-full overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-red-300 scrollbar-thin h-screen snap-x snap-mandatory bg-white max-h-[350px] flex space-x-2">
      <Gallery img="/banner1.jpg" />
      <Gallery img="/banner2.jpg" />
      <Gallery img="/banner3.jpg" />
      <Gallery img="/banner1.jpg" />
      <Gallery img="/banner2.jpg" />
      <Gallery img="/banner3.jpg" />
    </div>
  );
}

export default Galleries