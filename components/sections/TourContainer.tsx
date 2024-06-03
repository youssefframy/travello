"use client";
import { TourCard } from "@/components/shared/TourCard";
// import { packages, trips } from "@/data/tours";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/lib/const";

import { useSearchParams } from "next/navigation";
import { Tour } from "@/lib/types";


export const TourContainer: React.FC = () => {
  const searchParams = useSearchParams();
  const tourType = searchParams.get("tour") || "trips";
  // fetch tours from /trip
  const { data: trips, isLoading } = useQuery({
    queryKey: ["trip" ],
    queryFn: () => fetch(`${BASE_URL}/trip`).then((res) => res.json()),
})
  // fetch tours from /package
  const { data: packages, isLoading: isPackageLoading } = useQuery({
    queryKey: ["package"],
    queryFn: () => fetch(`${BASE_URL}/package`).then((res) => res.json()),
  });
console.log(packages)
  return (
    <section className="flex flex-wrap justify-center items-start gap-8 p-4">
      {/* {tourType === "packages" &&
        packages.map((trip, index) => <TourCard key={index} {...trip} />)} */}
        {isPackageLoading ? <div>Loading...</div> :
        tourType === "packages" &&
        packages.data.map((trip: Tour, index: number) => <TourCard key={index} index={index} {...trip} />)
      }

{isLoading ? <div>Loading...</div> :


      tourType === "trips" &&
        trips.data.map((trip: Tour, index: number) => <TourCard key={index} index={index} {...trip} />)
}
    </section>
  );
};
