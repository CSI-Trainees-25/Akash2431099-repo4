function CardType3({firstL,secondL,thirdL="Learn more",image}) {
  return (
    <div className="overflow-hidden border border-gray-400  hover:shadow-xl transition  flex flex-col justify-center items-center bg-white">
        <h1 className="tracking-widest text-xs mt-5 mb-3">{firstL}</h1>
        <div className="flex flex-col items-center">
            <h1 className="font-serif text-2xl tracking-widest">{secondL}</h1>
            <h1 className="border-t-2 border-rose-800">{thirdL}</h1>
        </div>
        <img src={image} className="w-full h-full -mt-10 object-cover [mask-image:linear-gradient(to_top,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.9)_60%,transparent_80%)] h-45 object-cover" />
    </div>
  )
}

export default CardType3
