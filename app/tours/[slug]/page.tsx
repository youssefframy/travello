import { tourData } from "@/data/singleTours";
import { Star } from "lucide-react";
import Image from "next/image";
export default function TourPage() {
  // A function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <>
      <div
        className="w-full relative h-56 md:h-96"
        style={{
          background: `url(${tourData.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="my-6 p-4">
        <h1 className="text-4xl font-bold mt-4">{tourData.title}</h1>
        <div className="flex justify-between items-center my-2">
          <span className="text-lg">{tourData.location}</span>
        </div>
        <p>{tourData.description}</p>
      </div>
    </>
  );
}
