import heroImage from '../Images/heroImage.jpg'

function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[450px] flex flex-col justify-center px-10 "
      style={{backgroundImage:`url(${heroImage})`}}>
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative z-10 text-black max-w-lg ml-25">
          <p className="text-lg font-semibold">It’s arrived, the</p>
          <h1 className="text-4xl  font-semibold font-serif tracking-wide">PREMIUM ECONOMY</h1>
          <div className="relative text-black max-w-lg ml-57">
            <p className="text-lg mt-2 font-semibold">you’ve been waiting for</p>
            <button className="mt-4 ml-16 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium shadow-md">Learn more</button>
          </div>
        </div>
    </section>
  );
}

export default HeroSection
