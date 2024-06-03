"use client";
import { TourCard } from "@/components/shared/TourCard";
import { packages, trips } from "@/data/tours";

import { useSearchParams } from "next/navigation";

export const TourContainer: React.FC = () => {
  const searchParams = useSearchParams();
  const tourType = searchParams.get("tour") || "trips";
  return (
    <section className="flex flex-wrap justify-center items-start gap-8 p-4">
      {tourType === "packages" &&
        packages.map((trip, index) => <TourCard key={index} {...trip} />)}

      {tourType === "trips" &&
        trips.map((trip, index) => <TourCard key={index} {...trip} />)}
    </section>
  );
};
