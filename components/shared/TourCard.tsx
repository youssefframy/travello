import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface TourCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  location: string;
  price: number;
  providerId: string;
  rating: number;
  review: number;
  status: string;
  tripId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  index:number;
}

export const TourCard: React.FC<TourCardProps> = (props) => {
  return (
    <div className="w-80 h-[450px] rounded-lg overflow-hidden shadow-lg">
      <div className="relative overflow-clip">
        <Link href={`/tours/${props.id}`} className="relative w-full">
          <Image
            className="w-full hover:scale-110 ease-in-out duration-300 transition-all"
            src={"/trips/aswan.jpeg"}
            alt={props.name}
            width={500}
            height={300}
          />
        </Link>
        {!(props.index % 2) && (
          <span className="absolute top-0 right-0 bg-yellow-400 text-xs uppercase px-2 py-1 rounded-bl-lg text-black font-bold">
            Featured
          </span>
        )}
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2">{props.name}</h3>
        <p className="text-gray-700 text-base mb-4">{props.description}</p>
        <div className="flex items-center text-center">
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="ml-2 text-gray-600 text-sm">
            {Math.random()} Reviews
          </span>
        </div>
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.duration} days
        </span>
        <span className="text-base font-semibold">from ${props.price}</span>
      </div>
    </div>
  );
};
