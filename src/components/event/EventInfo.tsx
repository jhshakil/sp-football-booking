import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";

const EventInfo = () => {
  return (
    <div className="[&>div]:py-15 [&>div]:border-b [&>div]:border-border [&>div>h2]:text-[32px] [&>div>h2]:font-bold">
      {/* event tag  */}
      <div className="flex justify-between gap-10">
        <div className="flex items-center gap-3">
          <Badge variant={"tag"} className="bg-[#E6F8F8]">
            Football
          </Badge>
          <Badge variant={"tag"} className="bg-[#E6F8F8]">
            Relay
          </Badge>
          <Badge variant={"tag"} className="bg-[#FFE8F0]">
            Female
          </Badge>
          <Badge variant={"tag"} className="bg-[#EFEDFF]">
            Age: Below 25
          </Badge>
        </div>
        <div className="flex items-center px-2.5 py-[5px] gap-3">
          <Image
            width={40}
            height={40}
            src={"/images/stats-icon.png"}
            alt="stats icon"
          />
          <p className="text-2xl">Beginner</p>
        </div>
      </div>
      {/* event about  */}
      <div>
        <h2>About this event</h2>
        <p className="mt-10 max-w-[80%]">
          Learn about the capital’s first beavers in 400 years from the Ealing
          Beaver project, make your own mushroom growing starter kit with urban
          agriculture experts, before joining Roma the Engineer to get into the
          nuts and bolts of tomorrow’s high-rise buildings.
        </p>
        <Button variant={"link"} size={"link"} className="mt-3">
          Read More
        </Button>
      </div>
      {/* event location  */}
      <div>
        <h2>Location</h2>
        <div className="flex justify-between gap-4 max-w-[80%] mt-10">
          <div>
            <h3 className="text-2xl text-[#4E566B] font-bold">NDE Field</h3>
            <p className="mt-1 text-secondary">
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
            </p>
          </div>
          <Button
            variant={"outline"}
            className="h-11 px-4 py-[15px] rounded-full border-[#4E566B] text-lg text-[#4E566B]"
          >
            Open maps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
