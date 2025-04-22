import Image from 'next/image'
import React from 'react'

const OurValues = () => {
  return (
    <section className="w-full h-screen bg-black-500 text-white flex  justify-evenly items-center text-center p-4 border-2 border-white">
    <div>

       <span className='text-4xl text-[#139CFF]'>Our Values</span>
       
     </div>
        <div className="relative w-[500px] h-[300px]">
  {/* Background Image */}
  <Image
    src="/our_values.png"
    alt="Description"
    fill
    className="object-cover"
  />

  {/* Top - Climate Action */}
  <p className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-blue-600 text-xl font-bold drop-shadow-md">
    Climate Action
  </p>

  {/* Bottom-Left - Trust */}
  <p className="absolute bottom-[10%] left-[15%] transform -translate-x-1/2 text-blue-600 text-xl font-bold drop-shadow-md">
    Trust
  </p>

  {/* Bottom-Right - Integrity */}
  <p className="absolute bottom-[10%] right-[15%] transform translate-x-1/2 text-blue-600 text-xl font-bold drop-shadow-md">
    Integrity
  </p>
</div>

  </section>
  )
}

export default OurValues