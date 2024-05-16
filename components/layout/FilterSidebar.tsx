"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterSidebarProps {}

export const FilterSidebar: React.FC<FilterSidebarProps> = () => {
  const [startPriceValue, setStartPriceValue] = useState(0);
  const [endPriceValue, setEndPriceValue] = useState(5000);
  const [startDate, setStartDate] = useState<Date | undefined>();

  const [endDate, setEndDate] = useState<Date | undefined>();

  return (
    <aside className="hidden md:flex md:flex-col gap-6 w-[500px] py-16 pl-6 justify-center items-start">
      <h2 className="text-2xl font-bold mb-2">Filter By</h2>
      <div className="w-full flex flex-col p-4 gap-2 border-2 rounded-lg">
        <h3 className="text-bold text-xl underline-offset-2">Price</h3>

        <div className="flex flex-col gap-2 justify-start items-start">
          <p>From</p>
          <Input
            type="number"
            defaultValue={startPriceValue}
            onChange={(e) => setStartPriceValue(parseInt(e.target.value))}
            className="py-0 focus:outline-none focus:ring-0 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p>To</p>
          <Input
            type="number"
            defaultValue={endPriceValue}
            onChange={(e) => setEndPriceValue(parseInt(e.target.value))}
            className="py-0 focus:outline-none focus:ring-0 rounded-md"
          />
        </div>

        <button
          type="button"
          className="mt-2 border-none text-end text-blue-500 hover:underline transition-all duration-300 ease-in-out"
        >
          <span>Apply</span>
        </button>
      </div>
      <div className="w-full flex flex-col p-4 gap-2 border-2 rounded-lg">
        <h3 className="text-bold text-xl underline-offset-2">Date</h3>

        <div className="flex flex-col gap-2 justify-start items-start">
          <p>From</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p>To</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <button
          type="button"
          className="border-none text-end mt-2 text-blue-500 hover:underline transition-all duration-300 ease-in-out"
        >
          <span>Apply</span>
        </button>
      </div>

      <div className="w-full flex flex-col p-4 gap-2 border-2 rounded-lg">
        <h3 className="text-bold text-xl underline-offset-2">Languages</h3>

        <RadioGroup defaultValue="french" className="my-1 text-xl">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="french" id="fr" />
            <Label htmlFor="fr">French</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="english" id="en" />
            <Label htmlFor="en">English</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="german" id="gr" />
            <Label htmlFor="gr">German</Label>
          </div>
        </RadioGroup>

        <button
          type="button"
          className="border-none text-end text-blue-500 hover:underline transition-all duration-300 ease-in-out"
        >
          <span>Apply</span>
        </button>
      </div>
    </aside>
  );
};
