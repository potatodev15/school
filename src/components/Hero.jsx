import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50">
            <div className="bg-[url('https://picsum.photos/1920/1080')] absolute inset-0 opacity-20"></div>
            </div>
        <div className="text-center z-10">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Heading Here</h1>
         <p className="text-lg md:text-xl lg:text-2xl mb-12">Your description text goes here</p>
         <button className="px-6 py-3 text-lg md:text-xl lg:text-2xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Button Text</button>
    </div>
</div>
  )
}

export default Hero