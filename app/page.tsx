import SearchBar from "@/components/booking/SearchBar";
import ToggleTours from "@/components/booking/ToggleTours";
import { ClientReviews } from "@/components/sections/ClientReviews";
import DiscoverSection from "@/components/sections/DiscoverySection";
import HeroSection from "@/components/sections/HeroSection";
import { TourContainer } from "@/components/sections/TourContainer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SearchBar />
      <ToggleTours />
      <TourContainer />
      <DiscoverSection />
      <ClientReviews
        name="Kody Byrd"
        rating={4}
        review="Nam dapibus nisi vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum."
      />
    </main>
  );
}
