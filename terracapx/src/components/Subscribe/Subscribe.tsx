import React from 'react'







const Subscribe = () => {
  return (
    <div className="max-w-md   rounded-lg shadow-md space-y-4 border border-red" >

  <div>
  <h2 className="text-[#FFC414] text-xl font-semibold">Stay in the loop</h2>
    <p className="text-white-600 text-sm">For product announcements and exclusive insights</p>
  </div>


  <div className="relative">

    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8H3V8a2 2 0 012-2h14a2 2 0 012 2v8z" />
      </svg>
    </span>

    <input
      type="text"
      placeholder="Input your email"
      className="w-full pl-10 pr-28 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />


    <button
      type="button"
      className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
    >
      Subscribe
    </button>
  </div>
</div>

  )
}

export default Subscribe