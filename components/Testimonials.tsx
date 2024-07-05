'use client'
import React, { useEffect, useState } from 'react';

const testimonials = [
  { user: 'Alex', text: 'Great products and amazing quality! Highly recommend this store.' },
  { user: 'Chris', text: 'Customer service was outstanding and the shipping was super fast.' },
  { user: 'Jordan', text: 'I love the variety of items available. Will definitely shop again!' },
  { user: 'Taylor', text: 'Affordable prices and the products exceeded my expectations.' },
  { user: 'Morgan', text: 'The website is user-friendly and the checkout process was seamless.' },
  { user: 'Jamie', text: 'Received my order in perfect condition. Very satisfied with the purchase.' },
  { user: 'Casey', text: 'Exceptional experience! The product quality is top-notch.' },
  { user: 'Avery', text: 'Impressed with the packaging and timely delivery. Great job!' },
  { user: 'Riley', text: 'The customer reviews helped me choose the best products. Very happy!' },
  { user: 'Skyler', text: 'Fantastic store with excellent deals. Will definitely recommend to others.' }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Check the screen size on the initial load

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - (isSmallScreen ? 1 : 3) ? 0 : prev + 1));
    }, 4000);

    return () => {
      window.removeEventListener('resize', updateSize);
      clearInterval(interval);
    };
  }, [isSmallScreen]);

  return (
    <div className='w-full min-h-auto flex items-center justify-center py-20'>
      <div className='w-full relative overflow-hidden p-10'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>
          Our <span className='text-purple-400'>happy</span> clients
        </h2>
        <div
          className='flex transition-transform ease-in-out duration-1000 gap-2 scroll-smooth'
          style={{ transform: `translateX(-${current * (100 / (isSmallScreen ? 1 : 3))}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-slate-950 border border-indigo-500/50 p-8 rounded-lg shadow-lg ${
                isSmallScreen ? 'w-full' : 'w-1/3'
              } flex-shrink-0`}
            >
              <p className='text-gray-300 text-lg mb-3 text-center'>
                &quot; {testimonial.text} &quot;
              </p>
              <p className='text-purple-100 font-bold text-right'>
                - {testimonial.user}
              </p>
            </div>
          ))}
        </div>
        <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-4'>
          {Array.from({ length: Math.ceil(testimonials.length / (isSmallScreen ? 1 : 3)) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ring-1 ring-gray-300 cursor-pointer flex items-center justify-center ${
                current === index ? 'scale-150' : ''
              }`}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className='w-[4px] h-[4px] bg-gray-300 rounded-full'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
