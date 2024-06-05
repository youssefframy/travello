"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getTours } from "@/app/api/tour/tour.query";
import { API_ENDPOINTS } from "@/lib/const";

const ToggleTours: React.FC = () => {
  const searchParams = useSearchParams();
  const activeSection = searchParams.get("tour") || "trips";
  const {data}=useQuery({
    queryKey: [API_ENDPOINTS.trip],
    queryFn: () => getTours(),
  })
  console.log(data)
  return (
    <div className="flex justify-center font-semibold text-sm md:text-base p-5 rounded-md gap-1">
      <Link
        scroll={false}
        href="?tour=trips"
        className={cn(
          "bg-white text-red-700 rounded-full px-3 md:px-4 py-1.5 transition-all hover:shadow duration-500 ease-in-out",
          {
            "bg-red-700 text-white": activeSection === "trips",
          }
        )}
      >
        Featured Trips
      </Link>
      <Link
        href="?tour=packages"
        scroll={false}
        className={cn(
          "bg-white text-red-700 rounded-full px-3 md:px-4 py-1.5 transition-all duration-500 ease-linear",
          {
            "bg-red-700 text-white": activeSection === "packages",
          }
        )}
      >
        Featured Packages
      </Link>
    </div>
  );
};

export default ToggleTours;
