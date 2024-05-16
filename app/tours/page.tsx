import { FilterSidebar } from "@/components/layout/FilterSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TourContainer } from "@/components/sections/TourContainer";
import { Suspense } from "react";

import ToggleTours from "@/components/booking/ToggleTours";

export default function ToursPage() {
  return (
    <div className="">
      <HeroSection imgSrc="/assets/hero2-bg.webp" content="Our Tours" />
      <div className="flex justify-between items-start gap-2">
        <FilterSidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <ToggleTours />
            <TourContainer />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
