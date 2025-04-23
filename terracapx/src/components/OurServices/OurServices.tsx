import React from 'react'

const OurServices = () => {
  return (
    
    <section className="w-full h-screen bg-black-500 text-white ">
        <div className='flex justify-evenly items-center border-2 border-white'>
        <span className='text-4xl text-[#139CFF]'>Our Services</span>
        <span></span>
        </div>
    {/* <div className="p-6  rounded-2xl shadow-md space-y-6 max-w-4xl mx-auto w-full border-2 border-red w-full"> */}
  {/* Top Section: Services */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-2 border-red w-full m-[-2]">
    <span className="text-xl font-semibold text-[#139CFF]">Carbon Project Financing</span>
    <span className="text-xl font-semibold text-[#139CFF]">Carbon Removal</span>
    <span className="text-xl font-semibold text-[#139CFF]">Consulting & Advisory</span>
  </div>

  {/* Bottom Section: Description */}
  <div className="p-6 flex  rounded-2xl shadow-md space-y-6  w-full border-2 border-red w-full">
 <div>
    <p className="text-gray-700 text-lg leading-relaxed">
      <span className="font-semibold text-[#139CFF]">TerraCapx</span> is your one-stop shop for impactful climate investments. We bridge the gap between investors and innovative solutions that actively combat climate change.
    </p>
  </div>
  
  <div>
    <p className="text-gray-700 text-lg leading-relaxed">
      <span className="font-semibold text-[#139CFF]">TerraCapx</span> is your one-stop shop for impactful climate investments. We bridge the gap between investors and innovative solutions that actively combat climate change.
    </p>
  </div>
  <div>
    <p className="text-gray-700 text-lg leading-relaxed">
      <span className="font-semibold text-[#139CFF]">TerraCapx</span> is your one-stop shop for impactful climate investments. We bridge the gap between investors and innovative solutions that actively combat climate change.
    </p>
  </div>
 </div>
{/* </div> */}

<div className="w-screen px-6 md:px-12 py-10 space-y-6">
  {/* Header Section */}
  <div className="space-y-4 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-[#139CFF]">Bridging the gap to Carbon Finance</h2>
    <p className="text-gray-700 text-lg">
      TerraCapx offers bespoke climate solutions for corporations and investors with science-based climate targets within the carbon market investing.
    </p>
  </div>

  {/* Three Columns Using Flex */}
  <div className="flex flex-col md:flex-row justify-between gap-6 max-w-7xl mx-auto">
    
    {/* Column 1 */}
    <div className="flex-1 p-6 rounded-xl space-y-2">
      <h3 className="text-xl font-semibold text-[#139CFF]">Who We Are</h3>
      <p className="text-gray-700">
        Dedicated to Climate Action: We bridge carbon financing through direct investments.
      </p>
    </div>

    {/* Column 2 */}
    <div className="flex-1 p-6 rounded-xl space-y-2">
      <h3 className="text-xl font-semibold text-[#139CFF]">What We Do</h3>
      <p className="text-gray-700">
        We connect corporate companies aligned to climate targets to invest in carbon removal companies via equity options.
      </p>
    </div>

    {/* Column 3 with Two Nested Sections */}
    <div className="flex-1 space-y-4 p-0">
      <div className="p-6 rounded-xl space-y-2">
        <h3 className="text-xl font-semibold text-[#139CFF]">How It Works</h3>
        <p className="text-gray-700">
          We onboard carbon removal companies seeking investment and match them with corporate clients to invest directly via equity options.
        </p>
      </div>
      <div className="p-6 rounded-xl space-y-2">
        <h3 className="text-xl font-semibold text-[#139CFF]">Who We Work With</h3>
        <p className="text-gray-700">
          We are focused on working with innovative carbon removal companies and corporate companies and investors.
        </p>
      </div>
    </div>
  </div>
</div>


     </section>
  )
}

export default OurServices