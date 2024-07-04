import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-slate-950 px-2">
      <div className="max-w-3xl px-4 py-8 bg-slate-200 shadow-md rounded-lg mt-20">
        <h2 className="text-3xl text-center font-bold text-purple-800 mb-4">About This Project</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project is built using Next.js, a React framework that enables server-side rendering (SSR) and static site generation (SSG). Next.js allows for efficient and performant rendering of React components, making it suitable for dynamic web applications.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The project utilizes TypeScript for type-checking and improved developer productivity. TypeScript adds static types to JavaScript, catching errors early during development and providing better tooling support.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Data is fetched from the FakeStore API, a mock e-commerce API providing product information. Server-Side Rendering (SSR) is used to fetch data on each request, ensuring up-to-date product information is displayed. Static Site Generation (SSG) is employed for pre-rendering pages at build time, optimizing performance and SEO.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The UI components are styled using Tailwind CSS, a utility-first CSS framework. Tailwind CSS offers a responsive and flexible design system, speeding up development with its pre-built utility classes.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          HeroIcons are used for scalable icons that integrate seamlessly with Tailwind CSS. These icons provide a consistent visual language across the application, enhancing user experience and accessibility.
        </p>
        
        <div className="text-lg text-gray-700 leading-relaxed mb-6">
          For more details and to explore the source code, you can visit the project repository:
          {' '}
          <a href="https://github.com/AliFeruz/fake-store-next" target='_blank'>
            <p className="text-purple-600 hover:underline text-center">GitHub Repository</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default index;
