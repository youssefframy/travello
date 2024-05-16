import { tourData } from "@/data/singleTours";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function TourPage({ params }: { params: { slug: string } }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <>
      <Breadcrumb className="p-2 md:p-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tours" className="text-lg">
              Tours
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="scale-150" />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize text-lg cursor-default">
              {params.slug}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div
        className="w-full relative h-56 md:h-96"
        style={{
          background: `url(${tourData.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="p-4 md:p-16 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{tourData.title}</h1>
        <div className="flex text-lg justify-between items-center my-2 pr-4">
          <p>{tourData.location}</p>
          <p className="font-semibold">Price Starting From {tourData.price}$</p>
        </div>
        <p>{tourData.description}</p>

        <h2 className="text-2xl font-semibold">Program Guide</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Day 1</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Day 2</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Day 3</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-4">
          <Link
            scroll={false}
            href="?booked=true"
            className="bg-blue-600 w-fit py-2 text-white text-lg font-medium px-4 rounded-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
