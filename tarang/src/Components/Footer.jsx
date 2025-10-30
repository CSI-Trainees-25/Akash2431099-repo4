import playstore from '../Logos/playstore.png'
import appstore from '../Logos/appstore.png'
import facebook from '../Logos/facebook.png'
import instagram from '../Logos/instagram.png'
import x from '../Logos/twitter.png'
import youtube from '../Logos/youtube.png'

function Footer() {
  return (
    <div className='bg-gray-800 w-full'>
        <div className='px-19 pt-15'>
            <div className='text-white text-2xl tracking-widest'>
                <h1>Popular Domestic Flight Routes</h1>
            </div>
            <div className='text-xl border-b-2 pb-10 grid grid-cols-4 mt-8 gap-y-4 gap-x-30 text-gray-500'>
                <h2>Delhi to Sydney Flight</h2>
                <h2>Mumbai to Bangkok Flight</h2>
                <h2>Delhi to Singapore Flight</h2>
                <h2>Mumbai to London Flight</h2>
                <h2>Delhi to Ahmedabad Flight</h2>
                <h2>Delhi to Kochi Flight</h2>
                <h2>Mumbai to Chennai Flight</h2>
                <h2>Mumbai to Dubai Flight</h2>
                <h2>Ahmedabad to Jaipur Flight</h2>
                <h2>Mumbai to Goa Flight</h2>
                <h2>Kolkata to Bangalore Flight</h2>
                <h2>Delhi to Mumbai Flight</h2>
                <h2>Mumbai to Delhi Flight</h2>
                <h2>Delhi to NewYork Flight</h2>
                <h2>Delhi to Goa Flight</h2>
                <h2>Delhi to Sydney Flight</h2>
            </div>
            <div className='flex justify-between mt-10'>
                <div>
                    <h1 className='text-white mb-5 text-2xl tracking-widest'>Subscribe to our special offers</h1>
                    <h2 className='text-xl text-gray-500 mb-5'>Save with our latest fares and offers</h2>
                    <div className='flex mt-15 justify-between w-full items-center'>
                        <input type="text" placeholder='Email Address' className='bg-white p-2 pr-30 rounded-tl-lg rounded-bl-lg ' />
                        <button className='bg-white px-4 py-2 rounded-tr-lg rounded-br-lg hover:text-gray-500'>SIGN UP</button>
                    </div>
                </div>
                <div>
                    <h1 className='text-white mb-5 text-2xl tracking-widest'>Tarang Airway App</h1>
                    <h2 className='text-xl text-gray-500 mb-5'>Book and manage your flights on the go</h2>
                    <div className='flex justify-between items-center'>
                        <img className="h-30 w-60" src={playstore} alt="playstore"/>
                        <img className="h-15 w-50" src={appstore} alt="appstore"/>
                    </div>
                </div>
                <div>
                    <h1 className='text-white mb-5 text-2xl tracking-widest'>Connect with us</h1>
                    <h2 className='text-xl text-gray-500 mb-5'>Share your Emirates experience</h2>
                    <div className='flex mt-13 gap-4'>
                        <img className='h-15 w-15' src={facebook} alt="facebook"/>
                        <img className='h-15 w-15' src={instagram} alt="instagram"/>
                        <img className='h-15 w-15' src={x} alt="twitter"/>
                        <img className='h-15 w-15' src={youtube} alt="youtube"/>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col ml-43 mr-10 pt-15 justify-center items-center'>
                    <h1 className='text-white text-xl mb-5'>Copyright © 2025 Air India Ltd.</h1>
                    <h2 className='text-gray-600 text-xl -ml-45'>All rights reserved. Use of this website indicates your compliance with our Privacy Notice, Conditions of Carriage, Terms and Conditions</h2>
                </div>
                <div>
                    <div className=' mt-15 rounded-tl-lg rounded-tr-lg px-5 pt-3 h-40' style={{backgroundColor:"#8aebe1"}}>
                        <h1 className='text-3xl'>Tarang</h1>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
