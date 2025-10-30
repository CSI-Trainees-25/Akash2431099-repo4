import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import BookingCard from '../Components/BookingCard'
import CardType1 from '../Components/CardType1'
import landour from '../Images/landour.png'
import mahaKumbh from '../Images/mahaKumbh.png'
import vaishnoDevi from '../Images/vaishnoDevi.png'
import vrindavan from '../Images/vrindavan.png'

function Home() {
  return (
    <div className='bg-gray-50 '>
      <Header/>
      <HeroSection/>
      <BookingCard/>
      <div className='mt-10 flex justify-center'>
        <h1 className='text-2xl pt-10 pb-20'>Featured destinations from</h1>
        <h1 className='font-bold text-2xl py-10 ml-2'>India</h1>
      </div>
      <div className='w-12/12 flex flex-col gap-30 items-center'>
        <div className='flex gap-30'>
          <CardType1
          image={landour}
          state="Uttrakhand"
          city="Landour"/>

          <CardType1
          image={vaishnoDevi}
          state="Jammu & Kashmir"
          city="Shree Mata Vaishno Devi"/>
        </div>
        <div className='flex gap-30'>
          <CardType1
          image={mahaKumbh}
          state="Uttar Pradesh"
          city="Maha Kumbh"/>

          <CardType1
          image={vrindavan}
          state="Uttar Pradesh"
          city="Vrindavan"/>
        </div>
      </div>
    </div>
  )
}

export default Home
