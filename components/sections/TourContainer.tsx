"use client";
import { getPackages } from "@/app/api/package/package.query";
import { getTours } from "@/app/api/tour/tour.query";
import { TourCard } from "@/components/shared/TourCard";
import { API_ENDPOINTS } from "@/lib/const";
import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "next/navigation";

export const TourContainer: React.FC = () => {
  const searchParams = useSearchParams();
  const tourType = searchParams.get("tour") || "trips";
  const {data}=useQuery({
    queryKey: [API_ENDPOINTS.trip],
    queryFn: () => getTours(),
  })
  const {data:packages}=useQuery({
    queryKey: [API_ENDPOINTS.package],
    queryFn: () => getPackages(),
  })
  return (
    <section className="flex flex-wrap justify-center items-start gap-8 p-4">
      {tourType === "packages" &&
        packages?.data?.map((trip:any, index:number) => <TourCard key={index} {...trip} />)}

      {tourType === "trips" &&
        data?.data.map((trip:any, index:number) => <TourCard key={index} {...trip} />)}
    </section>
  );
};
