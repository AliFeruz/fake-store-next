import React from 'react'
import { Vortex } from './ui/vortex'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className="w-full mx-auto  h-[75vh] md:mt-24 overflow-hidden">
      <Vortex
        backgroundColor=""
        className="flex items-center flex-col justify-center px-2 py-4 w-full h-full"
      >
        <h2 className="text-indigo-50 text-2xl md:text-6xl font-bold text-center">
        The New Arrival
        </h2>
        <p className="text-indigo-50/70 text-sm md:text-2xl max-w-xl mt-6 text-center">
        Discover stylish FakeStore arrivals, quality comfort, and innovation
        for your active life.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Link href={'/products'} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 
          transition duration-200 rounded-lg text-white shadow-lg shadow-indigo-500/50">
            Shop now
          </Link>
        </div>
      </Vortex>
    </div>
    </div>
  )
}

export default HeroSection
