import { TourDetails } from "@/lib/types";

export const tourData: TourDetails = {
  title: "Adventure 6 – All Egypt & Hurghada & Sinai",
  location: "All Egypt & Hurghada & Sinai",
  rating: 4.5,
  reviewCount: 3033,
  duration: "11 days",
  tourType: "Multi-day Tour",
  groupSize: "Up to 20 people",
  languages: ["English", "Español", "Français"],
  description:
    "Embark on an 11-day adventure across the historically rich and visually stunning landscapes of Egypt. This comprehensive tour offers a seamless blend of ancient landmarks and vibrant city life, with a side of relaxing beach days in Hurghada.",
  highlights: [
    "Guided tours of the Great Pyramids and the Sphinx",
    "A cruise down the Nile for a unique perspective of Aswan and Luxor",
    "Visits to lesser-known temples and historical sites, offering a deeper understanding of Egyptian history",
    "An excursion to the colored canyons in Sinai",
    "Beach relaxation and optional scuba diving in Hurghada",
    "Cultural experiences including traditional Egyptian meals and entertainment",
  ],
  priceOptions: [
    { description: "3-star hotels", price: 990.0 },
    { description: "4-star hotels", price: 1150.0 },
    { description: "5-star hotels", price: 1350.0 },
    { description: "Single Room Supplement", price: 250.0 },
    { description: "Optional Scuba Diving Package", price: 300.0 },
  ],
  imageUrl: "/assets/hurghada.jpeg",
};
