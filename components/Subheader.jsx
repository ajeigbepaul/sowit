import React from 'react'

function Subheader({title,subtitle}) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-red-300 py-4">
      <h2 className="text-center text-2xl font-semibold">{title}</h2>
      <h2 className="text-center text-sm">{subtitle}</h2>
    </div>
  );
}

export default Subheader