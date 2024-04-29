import SearchBar from "@/components/booking/SearchBar";
import ToggleTours from "@/components/booking/ToggleTours";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { TourContainer } from "@/components/sections/TourContainer";
import DiscoverSection from "@/components/sections/DiscoverySection";
import HeroSection from "@/components/sections/HeroSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ToggleTours />
        <TourContainer />
      </Suspense>
      <DiscoverSection />
      <ClientReviews />
    </main>
  );
}
