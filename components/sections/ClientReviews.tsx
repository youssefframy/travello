import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { clients } from "@/data/reviews";

export const ClientReviews: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-5">
      <h2 className="font-bold text-2xl">Client Reviews</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full md:max-w-3xl lg:max-w-5xl"
      >
        <CarouselContent className="p-2 md:p-4">
          {clients.map((client, index) => (
            <CarouselItem
              key={index}
              className="hover:scale-105 transition-all ease-in-out duration-300 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <div className="rounded h-96 overflow-hidden shadow-lg md:p-5">
                    <CardHeader className="flex flex-row gap-4 items-start justify-start">
                      <Avatar>
                        <AvatarFallback className="uppercase">
                          {client.name[0] + client.name[1]}
                        </AvatarFallback>
                      </Avatar>
                      <CardDescription className="text-lg font-semibold">
                        {client.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-5 h-5 ${
                            index < client.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </CardContent>
                    <CardContent className="text-gray-700 text-base">
                      {client.review}
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};
