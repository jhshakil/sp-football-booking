"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const GlobalSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-[260px] h-[52px] ps-4 pe-2 py-2 rounded-full flex justify-between text-left font-normal text-[#6A6A6A] shadow-md border border-[#F6F6F6]">
      <Input
        type="text"
        placeholder="Search..."
        className="border-0 outline-0 shadow-none p-0"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="bg-border p-[7.2px] rounded-full ml-2">
        <Image
          width={21}
          height={21}
          src={"/images/search.png"}
          alt="calender icon"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
