import { StaticImageData } from "next/image";

export interface Rating {
    rate: number;
    count: number;
  }

export interface ProductType {
    id: number,
    title: string,
    price: string,
    rating: Rating,
    category: string,
    description: string,
    image: StaticImageData
}