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
      data-aos="fade-left"
      className="flex flex-col 
      cursor-pointer bg-purple-100/95 p-5 items-center 
      rounded-lg shadow-lg shadow-indigo-500/50 relative h-[500px]"
    >
      <div className="absolute top-0 right-2">
        <BookmarkIcon className="w-10 h-10 fill-purple-500"/>
      </div>
     <div className="flex flex-col bg-white rounded-md items-center justify-center p-2">
     <Image
        data-aos="flip-right"
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-[282px] 
        h-[282px] object-contain rounded-md"
      />
     
     </div>
      <div className="text-center">
      <h3
          data-aos="fade-up"
          className="mt-4 text-base text-center font-medium"
        >
          {product.title}
        </h3>
        <div className="flex absolute w-full px-4 bottom-2 left-0 items-center justify-between">
        <div className="flex justify-between w-full items-center space-x-3">
          <p
            className="text-sm leading-normal flex items-center text-slate-950 gap-1"
          >
            <StarIcon width={24} height={24} className="text-yellow-600 fill-yellow-400"/>
            {product.rating.rate}    
          </p>
          <p
          className="font-semibold font-montserrat 
        text-purple-600 text-2xl leading-normal"
        >
          {product.price} <span className="text-black">$</span>
        </p>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
