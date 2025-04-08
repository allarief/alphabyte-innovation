import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl text-center">
          At Alphabyte Innovation, we are dedicated to transforming ideas into reality through cutting-edge technology and innovative solutions. Our team of experts is committed to delivering exceptional results that drive success for our clients.
        </p>
        <img src="/logo.png" alt="About Us" className="w-40 max-w-md rounded-lg" />
      </div>
    </div>
  )
}

export default Aboutpage
