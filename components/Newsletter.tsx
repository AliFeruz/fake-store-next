import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Here you can handle the form submission to your backend or third-party service
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 items-center justify-between md:py-20 pb-10">
        <div className='flex w-full items-center justify-center'>
        <p className="text-center text-5xl text-gray-100 p-4 px-10 tracking-widest">
        Discover a world of <br/><span className='text-4xl text-purple-500 tracking-widest'>comfort,</span>
        <span className='text-4xl text-purple-500 tracking-widest'> design,</span> and
        <span className='text-4xl text-purple-500 tracking-widest'> value</span>
        </p>
        </div>
      <div className="md:w-5/6 w-full max-w-md md:p-8 p-4 bg-slate-950 md:-mr-20 rounded-lg mt-6
      shadow-lg text-center border border-indigo-500/50">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-200 mb-6">Get the latest updates and offers.</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            className="w-full p-3 border border-purple-600 text-black rounded-md mb-4 focus:outline-none "
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-500 text-white rounded-md hover:bg-purple-800 transition duration-200"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-gray-300">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
