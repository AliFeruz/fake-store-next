import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`z-50 py-8 bg-black border-b border-purple-400 md:px-10 w-full flex fixed top-0 left-0
    items-center justify-center ${isScrolled && 'shadow-lg shadow-indigo-500/50'}`}>
      <nav className='w-5/6 flex items-center justify-between'>
        <div>
         <Link href={'/'}>
         <h2 className='md:text-3xl text-2xl font-bold text-indigo-50'>
         Fake<span className='text-purple-700'>Store</span>
         </h2>
         </Link>
        </div>
        <div className="flex justify-around md:space-x-20 space-x-5">
           <Link href={'/products'} className='md:text-sm text-xs text-indigo-100 uppercase font-medium'>Products</Link>
           <Link href={'/about'} className='md:text-sm text-xs text-indigo-100 font-medium uppercase'>About</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
