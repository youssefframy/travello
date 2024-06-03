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
  price: number;
  imageUrl: string;
}

export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: string;
  location: string;
  price: number;
  providerId: string;
  rating: number;
  review: number;
  status: string;
  tripId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}