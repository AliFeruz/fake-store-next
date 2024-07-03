import ProductsPage from '@/components/ProductsPage'
import { ProductType } from '@/types';
import { GetStaticProps } from 'next';
import React from 'react'


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const products: ProductType[] = await res.json();
  
    return {
      props: {
        products,
      },
    };
  };

type Props = {
  products: ProductType[];
};
 

const index = ({products} : Props) => {
  return (
    <div className='w-full min-h-screen bg-black flex items-center justify-center'>
      <ProductsPage products={products}/>
    </div>
  )
}

export default index
