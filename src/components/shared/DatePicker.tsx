"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import Image from "next/image";

type Props = {
  className?: string;
};

const DatePicker = ({ className }: Props) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[260px] h-[52px] ps-4 pe-2 py-2 rounded-full justify-between text-left font-normal text-[#6A6A6A] shadow-md border border-[#F6F6F6]",
            className
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <div className="bg-theme p-[7.2px] rounded-full ml-2">
            <Image
              width={21}
              height={21}
              src={"/images/calendar.png"}
              alt="calender icon"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
