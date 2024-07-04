import { GetStaticProps } from 'next';
import { useState } from 'react';
import { ProductType } from '@/types';
import Image from 'next/image';
import ProductCard from './ProductCard';


type Props = {
  products: ProductType[];
};

const ProductsPage = ({ products }: Props) => {
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen w-full md:w-5/6 mt-20 p-4 pb-10">
      <div className='flex items-center justify-end w-full md:p-8 p-3'>
     <div className='flex-col'>
     <h1 className="text-3xl font-bold mb-4 text-indigo-50 text-end">Products</h1>
      <div className="mb-4">
        <label htmlFor="category" className="md:mr-2 text-indigo-100">Filter by category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-indigo-50 rounded p-2 text-black"
        >
          {categories.map((category, index) => (
            <option key={index} value={category} className='text-black'>{category}</option>
          ))}
        </select>
      </div>
     </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
            <ProductCard product={product} key={index}/>
        ))}
      </div>
    </div>
  );
};



export default ProductsPage;
