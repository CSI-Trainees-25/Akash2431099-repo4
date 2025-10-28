import React from 'react'

function Header() {
  return (
    <header className="w-full bg-white ">
        <div className='flex items-center justify-between px-6 py-3' >
            <h1 className='text-3xl font-serif text-black'>Tarang</h1>
            <nav className='md:flex space-x-8 text-sm font-semibold text-gray-800'>
                <a href="#">BOOK</a>
                <a href="#">MANAGE</a>
                <a href="#">EXPERIENCE</a>
                <a href="#">LOYALTY</a>
                <a href="#">HELP</a>
            </nav>
            <div>
                <button className='text-gray-800 font-semibold text-sm'>LOG IN/SIGN UP</button>
            </div>
        </div>
    </header>
  )
}

export default Header
