import Image from "next/image";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { Heart } from "lucide-react";
import EventOption from "./EventOption";

const EventTitle = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <h1 className="text-3xl md:text-[48px] font-black">
          Road to the Football Finals
        </h1>
        <div className="flex items-center gap-4">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full size-[42px]"
          >
            <Image
              width={26}
              height={26}
              src={"/images/upload.png"}
              alt="upload"
            />
          </Button>
          <Toggle
            aria-label="Toggle italic"
            variant={"outline"}
            className="rounded-full size-[42px]"
          >
            <Heart fill="#494949" stroke="transparent" className="size-6" />
          </Toggle>
          <EventOption />
        </div>
      </div>
      <div className="mt-3 text-xl md:text-2xl text-secondary">
        <p>Bashundhara Sports Complex</p>
        <p>Mar 14 from 7:30 PM - 9:30 PM</p>
      </div>
    </div>
  );
};

export default EventTitle;
