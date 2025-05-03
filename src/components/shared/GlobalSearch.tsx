"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
};

const GlobalSearch = ({ className }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className={cn(
        "w-[260px] h-[52px] ps-4 pe-2 py-2 rounded-full flex justify-between text-left font-normal text-[#6A6A6A] shadow-md border border-[#F6F6F6]",
        className
      )}
    >
      <Input
        type="text"
        placeholder="Search..."
        className="border-0 outline-0 shadow-none p-0"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="flex bg-border p-[7.2px] rounded-full ml-2 aspect-square">
        <Image
          width={21}
          height={21}
          src={"/images/search.png"}
          className="object-cover"
          alt="calender icon"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
