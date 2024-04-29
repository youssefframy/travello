import SearchBar from "@/components/booking/SearchBar";
import ToggleTours from "@/components/booking/ToggleTours";
import DiscoverSection from "@/components/sections/DiscoverySection";
import HeroSection from "@/components/sections/HeroSection";
import { TourCard } from "@/components/shared/TourCard";
import { packages, trips } from "@/data/tours";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SearchBar />
      <ToggleTours />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {packages.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
        {trips.map((trip, index) => (
          <TourCard key={index} {...trip} />
        ))}
      </div>
      <DiscoverSection />
    </main>
  );
}
