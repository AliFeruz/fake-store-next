import { ProductType } from '@/types'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

type Props = {
    products: Array<ProductType>
}

const SalesSection = ({products} : Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [time, setTime] = useState(new Date());
    const [endDate] = useState(new Date(Date.now() + 10 * 24 * 60 * 60 * 1000));

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
      }, []);

      
      useEffect(() => {
        const autoScroll = setInterval(handleNext, 50000); // Change product every 10 seconds
        return () => clearInterval(autoScroll); // Clear interval on component unmount
      }, [currentIndex]);
    
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
    };
  
    const currentProduct = products[currentIndex];

    const getTimeRemaining = () => {
        const total = endDate.getTime() - time.getTime();
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);
        return { total, days, hours, minutes, seconds };
      };
    
    const { days, hours, minutes, seconds } = getTimeRemaining();
  
    if (!products || products.length === 0) {
      return <div>No products available.</div>;
    }
    // console.log(products)

  return (
    <div className="flex md:h-[90vh] min-h-screen md:w-5/6 p-4 flex-col items-center justify-center 
     bg-slate-950 rounded-lg border border-purple-900 relative">
        <h1 className='md:text-6xl text-2xl tracking-widest font-bold text-purple-700 mt-8'>Sales Started Now</h1>
        <div className="flex items-center mt-3 contrast-200 bg-indigo-950 p-3 rounded-lg">
          <div className="text-lg text-lime-500">
            {days}d {hours}h {minutes}m {seconds}s
          </div>
        </div>
      <button
        onClick={handleNext}
        className="absolute flex md:flex-col justify-center items-center right-5 z-10 sm:top-1/2 bottom-0 
        uppercase transform -translate-y-1/2
         text-purple-600 p-1"
      >
        Next
        <ChevronDoubleRightIcon className='md:w-16 md:h-16 w-8 h-8'/>
      </button>
      <button
        onClick={handlePrev}
        className="absolute flex md:flex-col justify-center left-5 z-10 sm:top-1/2 bottom-0 uppercase transform -translate-y-1/2
         text-purple-600 p-1 items-center"
      >
        <ChevronDoubleLeftIcon className='md:w-16 md:h-16 w-8 h-8'/>
        Prev
      </button>
      <div className="mt-8 bg-purple-100/95 rounded-2xl md:py-10 md:w-5/6 w-full p-5 relative">
        <div className="flex flex-col items-center group">
          <div className='bg-white md:p-4 rounded-lg'>
          <Image
            src={currentProduct.image}
            alt={currentProduct.title}
            width={300}
            height={400}
            className="w-64 h-64 object-contain"
            priority
          />
          </div>
          <h2 className="text-lg font-bold mt-4">{currentProduct.title}</h2>
          <p className="text-sm text-purple-600 uppercase mt-3">{currentProduct.category}</p>
          <p className="text-sm font-bold text-gray-900 mt-3">${currentProduct.price}</p>
          <div className="absolute border-b h-full w-full flex items-center justify-center rounded-2xl inset-x-0 bottom-0 
          bg-gradient-to-t from-slate-900 contrast-150 from-30% p-8 opacity-0 transition 
          duration-300 group-hover:opacity-100">
          <p className="md:text-2xl text-xs text-gray-50 text-center mx-10 p-1 tracking-wider">{currentProduct.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <Link href={'/products'} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 
        transition duration-200 rounded-lg text-white shadow-lg shadow-indigo-500/50">
        Shop now
        </Link>
      </div>
    </div>
  )
}

export default SalesSection