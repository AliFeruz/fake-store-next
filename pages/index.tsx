import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import SalesSection from "@/components/SalesSection";
import Testimonials from "@/components/Testimonials";
import { ProductType } from "@/types";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/");
    const products: ProductType[] = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

type Props = {
  products: Array<ProductType>;
};

const Home: React.FC<Props> = ({ products }) => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center bg-black">
      <HeroSection />
      <SalesSection products={products} />
      <Testimonials />
      <Newsletter/>
    </main>
  );
};

export default Home;
