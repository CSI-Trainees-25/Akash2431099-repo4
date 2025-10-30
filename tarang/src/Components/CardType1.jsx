function CardType1({image,state,city,tagline="Discover for yourself"}) {
  return (
    <div className="overflow-hidden shadow-md hover:shadow-xl transition w-155 flex flex-col justify-center items-center bg-white">
      <img src={image} alt={city} className="w-full h-45 object-cover" />
      <div className="p-5 text-center">
        <p className="text-xs uppercase text-gray-500 tracking-widest">{state}</p>
        <h1 className="text-3xl font-semibold text-gray-800">{city}</h1>
        <p className="text-gray-800 mt-3">{tagline}</p>
      </div>
    </div>
  );
}
export default CardType1
