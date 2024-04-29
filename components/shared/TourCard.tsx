import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export interface TourCardProps {
  title: string;
  description: string;
  days: number;
  price: number;
  imgSrc: string;
  reviews: number;
  duration: number;
  featured?: boolean;
}

export const TourCard: React.FC<TourCardProps> = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative overflow-clip">
        <Link href="#">
          <img
            className="w-full hover:scale-110 ease-in-out duration-300 transition-all"
            src={props.imgSrc}
            alt={props.title}
          />
        </Link>
        {props.featured && (
          <span className="absolute top-0 right-0 bg-yellow-400 text-xs uppercase px-2 py-1 rounded-bl-lg text-black font-bold">
            Featured
          </span>
        )}
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{props.title}</h3>
        <p className="text-gray-700 text-base mb-4">{props.description}</p>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="ml-2 text-gray-600">{props.reviews} Reviews</span>
        </div>
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.duration} days
        </span>
        <span className="text-xl font-semibold">from ${props.price}</span>
      </div>
    </div>
  );
};
