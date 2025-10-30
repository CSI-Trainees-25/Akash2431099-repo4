import { Plane, Hotel, Bus, Train, Car } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

function BookingCard() {
    const offers = [
    { label: "Student", sub: "Extra Bags" },
    { label: "Armed Forces", sub: "Up to ₹600 Off" },
    { label: "Doctors", sub: "Up to ₹600 Off" },
    { label: "Senior Citizen", sub: "Up to ₹600 Off" },
  ];
  return (
    <section className='relative w-full flex justify-center items-center -mt-25 mb-10 z-20'>
        <div className="bg-white w-11/12 rounded-2xl flex flex-col  shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center w-11/12 bg-white rounded-2xl">
                <div className="flex gap-5 ml-10 py-4 bg-white rounded-t-2xl">
                    {[
                        { icon: Plane, label: "Flights" },
                        { icon: Hotel, label: "Hotels" },
                        { icon: Bus, label: "Buses" },
                        { icon: Train, label: "Trains" },
                        { icon: Car, label: "Cabs" },
                    ].map(({ icon: Icon, label }) => (
                    <button key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition"><Icon size={16} />{label}</button>
                    ))}
                </div>
                <div className="-mr-15">
                    <h1 className='text-3xl font-serif text-black'>Tarang</h1>
                </div>
            </div>
            <div className=" w-12/12 bg-rose-100 px-11 py-10 grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                <div className="md:col-span-6 flex items-center gap-7 text-sm mb-4 font-medium text-gray-700">
                    <label className="flex items-center gap-2">
                        <input className="accent-red-600" type="radio" name="trip" defaultChecked /> One Way
                    </label>
                    <label className="flex items-center gap-2">
                        <input className="accent-red-600" type="radio" name="trip" /> Round Trip
                    </label>
                </div>
                <div className="flex gap-23 mb-12 items-center">
                    <div className="border-b border-gray-400 flex-shrink-0">
                        <p className="text-xs text-gray-500">Departure From</p>
                        <h1 className="text-2xl mt-3 mb-2 font-bold">New Delhi</h1>
                        <p className="text-xs mb-3 text-gray-400">DEL, Indira Gandhi International</p>
                    </div>
                    <div>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-red-50 transition">
                            <ArrowLeftRight className="text-red-500" size={20} />
                        </button>
                    </div>
                    <div className="border-b border-gray-400 flex-shrink-0">
                        <p className="text-xs text-gray-500">Going To</p>
                        <h1 className="text-2xl mt-3 mb-2 font-semibold">Landour</h1>
                        <p className="text-xs mb-3 text-gray-400">DED, Jolly Grant Airport</p>
                    </div>
                    <div className="border-b border-gray-400 flex-shrink-0">
                        <p className="text-xs text-gray-500">Departure Date</p>
                        <div className="flex justify-center items-center gap-2">
                            <h1 className="text-2xl mt-3 mb-2 font-semibold">06</h1>
                            <h2  className="text-xl mt-3 mb-2 font-semibold">Oct'25</h2>
                        </div>
                        <p className="text-xs mb-3 text-gray-400">Monday</p>
                    </div>
                    <div className="border-b border-gray-400 flex-shrink-0">
                        <p className="text-xs text-gray-500">Return Date</p>
                        <p className="text-blue-600 mt-3 text-sm font-medium  cursor-pointer">Book Round Trip </p>
                        <p className="text-blue-600 text-sm mb-7 font-medium  cursor-pointer">to save extra</p>
                    </div>
                    <div className="border-b border-gray-400 flex-shrink-0">
                        <p className="text-xs text-gray-500">Travellers & Class</p>
                        <h1 className="text-2xl mt-3 mb-2 font-semibold">1 Traveller</h1>
                        <p className="text-xs mb-3 text-gray-400">Economy</p>
                    </div>
                    <div>
                        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg">Search</button>
                    </div>
                </div>
                <div className="md:col-span-6 flex items-center gap-7 text-sm font-medium text-gray-700">
                    <label className="flex border border-gray-500 p-3 rounded-2xl items-center gap-2 ">
                        <input className="accent-red-600" type="radio" name="trip" defaultChecked /> Student
                    </label>
                    <label className="flex border border-gray-500 p-3 rounded-2xl items-center gap-2">
                        <input className="accent-red-600" type="radio" name="trip" /> Armed Forces
                    </label>
                    <label className="flex border border-gray-500 p-3 rounded-2xl items-center gap-2">
                        <input className="accent-red-600" type="radio" name="trip" defaultChecked /> Doctors
                    </label>
                    <label className="flex border border-gray-500 p-3 rounded-2xl items-center gap-2">
                        <input className="accent-red-600" type="radio" name="trip" /> Senior Citizen
                    </label>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default BookingCard
