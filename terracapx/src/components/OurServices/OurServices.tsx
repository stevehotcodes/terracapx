import React from 'react'

const OurServices = () => {
  return (
    
    <section className="w-full h-screen bg-black-500 text-white ">
        <div className='flex justify-evenly  border-2 border-white'>
        <span className='text-4xl text-[#139CFF]'>Our Services</span>
        </div>
        <div className="p-6  rounded-2xl shadow-md space-y-6 max-w-4xl mx-auto w-full">
  {/* Top Section: Services */}
  <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 border-2 border-red w-full">
    <span className="text-xl font-semibold text-[#139CFF]">Carbon Project Financing</span>
    <span className="text-xl font-semibold text-[#139CFF]">Carbon Removal</span>
    <span className="text-xl font-semibold text-[#139CFF]">Consulting & Advisory</span>
  </div>

  {/* Bottom Section: Description */}
  <div>
    <p className="text-gray-700 text-lg leading-relaxed">
      <span className="font-semibold text-[#139CFF]">TerraCapx</span> is your one-stop shop for impactful climate investments. We bridge the gap between investors and innovative solutions that actively combat climate change.
    </p>
  </div>
</div>

     </section>
  )
}

export default OurServices