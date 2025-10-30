import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import BookingCard from '../Components/BookingCard'
import CardType1 from '../Components/CardType1'
import landour from '../Images/landour.png'
import mahaKumbh from '../Images/mahaKumbh.png'
import vaishnoDevi from '../Images/vaishnoDevi.png'
import vrindavan from '../Images/vrindavan.png'
import CardType2 from '../Components/CardType2'
import dubai from '../Images/dubai.png'
import firstClass from '../Images/firstClass.png'
import businessClass from '../Images/businessClass.png'
import premiumEconomy from '../Images/premiumEconomy.png'
import economy from '../Images/economy.png'
import CardType3 from '../Components/CardType3'
import Footer from '../Components/Footer'



function Home() {
  return (
    <div className='bg-gray-200'>
      <Header/>
      <HeroSection/>
      <BookingCard/>
      <section className='mt-10 flex justify-center'>
        <h1 className='text-2xl pt-10 pb-20'>Featured destinations from</h1>
        <h1 className='font-bold text-2xl py-10 ml-2'>India</h1>
      </section>
      <section className='w-12/12 flex flex-col gap-30 items-center'>
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
        <div className='flex gap-30 mb-25'>
          <CardType1
          image={mahaKumbh}
          state="Uttar Pradesh"
          city="Maha Kumbh"/>

          <CardType1
          image={vrindavan}
          state="Uttar Pradesh"
          city="Vrindavan"/>
        </div>
      </section>
      <section className='flex flex-col mb-15 items-center'>
        <div className='flex justify-center items-center gap-2 mb-10 tracking-widest'>
          <h1>FLYING WITH</h1><h1 className='text-xl'>TARANG</h1>
        </div>
        <div>
          <h1 className='font-serif tracking-widest text-5xl mb-7'>Make it an incredible journey</h1>
        </div>
        <div>
          <h1 className='text-lg text-gray-500'>Explore the Emirates experience and plan an unforgettable trip beyond your flight.</h1>
        </div>
      </section>
      <section className=' w-11/12 ml-20 mr-10 grid grid-cols-2 gap-3 mb-10'>
        <div>
          <CardType3
          image={dubai}
          firstL="DUBAI"
          secondL="Discover Dubai"
          />
        </div>
        <div className='grid grid-cols-2 gap-3 mb-20 w-full'>
          <div>
            <CardType2
            image={firstClass}
            firstL="CABIN FEATURES"
            secondL="First Class"
            />
          </div>
          <div className='mr-7'>
            <CardType2
            image={businessClass}
            firstL="CABIN FEATURES"
            secondL="Business Class"
            />
          </div>
          <div>
            <CardType2
            image={premiumEconomy}
            firstL="CABIN FEATURES"
            secondL="Premium Economy"
            />
          </div>
          <div className='mr-7'>
            <CardType2
            image={economy}
            firstL="CABIN FEATURES"
            secondL="Economy class"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
