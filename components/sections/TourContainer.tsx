"use client";
import { TourCard } from "@/components/shared/TourCard";
import { packages, trips } from "@/data/tours";

import { useSearchParams } from "next/navigation";

export const TourContainer: React.FC = () => {
  const searchParams = useSearchParams();
  const tourType = searchParams.get("tour") || "trips";
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {tourType === "packages" &&
        packages.map((trip, index) => <TourCard key={index} {...trip} />)}

      {tourType === "trips" &&
        trips.map((trip, index) => <TourCard key={index} {...trip} />)}
    </section>
  );
};
