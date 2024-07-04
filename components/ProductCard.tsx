import { ProductType } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookmarkIcon, StarIcon } from "@heroicons/react/24/outline";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      // data-aos="fade-left"
      className="flex flex-col 
      cursor-pointer bg-slate-950 p-5 items-center w-full
      rounded-lg border border-indigo-500/50 relative h-[500px]"
    >
      {/* <div className="absolute top-0 right-2">
        <BookmarkIcon className="w-10 h-10 fill-purple-500"/>
      </div> */}
     <div className="flex flex-col bg-white rounded-md w-full items-center justify-center p-2">
     <Image
        
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-[282px] 
        h-[282px] object-contain rounded-md bg-white"
      />
     
     </div>
      <div className="text-center bg-slate-950">
      <h3
          // data-aos="fade-up"
          className="mt-6 text-base text-center font-medium bg-slate-950"
        >
          {product.title}
        </h3>
        <div className="flex absolute w-full px-4 bottom-2 left-0 items-center justify-between">
        <div className="flex justify-between w-full items-center md:space-x-3 bg-slate-950">
          <p
            className="text-sm leading-normal flex items-center gap-1"
          >
            <StarIcon width={24} height={24} className="text-yellow-500 fill-yellow-600"/>
            {product.rating.rate}    
          </p>
          <p
          className="font-semibold 
        text-purple-400 text-2xl leading-normal"
        >
          {product.price} <span className="text-gray-400">$</span>
        </p>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
