import React, { useEffect, useRef } from 'react';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScrolling = () => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 2; // Increase the scroll step for faster scrolling
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0; // Scroll back to the beginning
        }
      }
    };

    scrollInterval = setInterval(scrollStep, 10); // Adjust the interval as needed (lower value for faster scrolling)
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);


  return (
    <div className='w-full min-h-auto flex items-center justify-center py-10'>
      <div className='w-5/6'>
        <h2 className='text-4xl font-bold text-white mb-8 text-center'>Our <span className='text-purple-400'>happy</span> clients</h2>
        <div ref={scrollContainerRef} 
        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
        className='flex overflow-x-auto space-x-4 pb-6 hide-scrollbar'>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className='bg-slate-950 border border-indigo-500/50 p-8 rounded-lg shadow-lg min-w-[300px] relative'>
              <p className='text-gray-300 text-lg mb-3 text-center'>&quot; {testimonial.text} &quot;</p>
              <p className='text-purple-100 font-bold text-right absolute bottom-3 right-4'>- {testimonial.user}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
