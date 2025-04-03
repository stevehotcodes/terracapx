import React from 'react'

const HeroSection = () => {
  return (

    <section className="w-full h-screen bg-black-500 text-white flex flex-col justify-center items-center text-center p-4">
    <h1 className="text-5xl font-bold mb-4">Bridging the gap to Carbon Financing</h1>
    <p className="text-xl mb-6">Connecting businesses with sustainable financial solutions.</p>
    <div className='flex space-between'>
    <button className="px-6 py-2 bg-[#139CFF] text-white rounded-md hover:bg-green-700 transition duration-300">
      Join Us
    </button>
    <button className="px-6 py-2 bg-[#139CFF] text-white rounded-md hover:bg-green-700 transition duration-300">
      Contact Us
    </button>
    </div>
    
  </section>
  )
}

export default HeroSection