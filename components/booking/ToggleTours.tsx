"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const ToggleTours: React.FC = () => {
  const searchParams = useSearchParams();
  const activeSection = searchParams.get("tour") || "trips";
  return (
    <div className="flex justify-center font-semibold p-5 rounded-md gap-2">
      <Link
        scroll={false}
        href="?tour=trips"
        className={cn(
          "bg-white text-red-700 rounded-full px-4 py-1.5 transition-all shadow duration-500 ease-in-out",
          {
            "bg-red-700 text-white": activeSection === "trips",
          }
        )}
      >
        Our Featured Trips
      </Link>
      <Link
        href="?tour=packages"
        scroll={false}
        className={cn(
          "bg-white text-red-700 rounded-full px-4 py-1.5 transition-all duration-500 ease-linear",
          {
            "bg-red-700 text-white": activeSection === "packages",
          }
        )}
      >
        Our Featured Packages
      </Link>
    </div>
  );
};

export default ToggleTours;