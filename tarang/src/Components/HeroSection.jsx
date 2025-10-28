import React from 'react'
import heroImage from '../Images/heroImage.jpg'

function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[450px] flex flex-col justify-center items-start px-10 "
      style={{backgroundImage:`url(${heroImage})`}}>
        <div className='absolute'></div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-white max-w-lg">
        <p className="text-lg italic">It’s arrived, the</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          PREMIUM ECONOMY
        </h1>
        <p className="text-lg mt-2">you’ve been waiting for</p>
        <button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium shadow-md">
          Learn more
        </button>
      </div>
    </section>
  );
}

export default HeroSection
