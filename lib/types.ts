// Types.ts
export interface TourDetails {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  duration: string;
  tourType: string;
  groupSize: string;
  languages: string[];
  description: string;
  highlights: string[];
  priceOptions: PriceOption[];
  imageUrl: string;
}

export interface PriceOption {
  description: string;
  price: number;
}
