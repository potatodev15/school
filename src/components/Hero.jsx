import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 h-full bg-black opacity-50">
        <div className="bg-[url('https://picsum.photos/1920/1080')] absolute inset-0 opacity-20"></div>
      </div>
      <div className="text-center z-10 mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 lg:mb-8">Your Heading Here</h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8">Your description text goes here</p>
        <button className="px-4 md:px-6 py-2 md:py-3 text-base md:text-lg lg:text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Button Text</button>
      </div>
    </div>
  )
}

export default Hero