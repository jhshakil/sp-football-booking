import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      {/* Good to know  */}
      <div>
        <h2>Good to know</h2>
        <div className="flex gap-3 mt-8">
          <div className="w-[300px] bg-[#DA6049] p-6 rounded-2xl text-white">
            <h3 className="text-2xl font-bold">Highlights</h3>
            <div className="mt-4 flex flex-col gap-[9px] text-lg font-medium">
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    width={18}
                    height={18}
                    src={"/images/gn-calendar.png"}
                    alt="calender icon"
                  />
                </span>
                <p>Mon, 2 Dec</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    width={18}
                    height={18}
                    src={"/images/gn-clock.png"}
                    alt="calender icon"
                  />
                </span>
                <p className="text-lg">7.30 AM - 8.30 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    width={18}
                    height={18}
                    src={"/images/gn-clock.png"}
                    alt="calender icon"
                  />
                </span>
                <p>Arrive 15 min before start</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    width={18}
                    height={18}
                    src={"/images/gn-venue.png"}
                    alt="calender icon"
                  />
                </span>
                <p>Venue booked</p>
              </div>
            </div>
          </div>
          <div className="w-[523px] bg-[#34735F] p-6 pe-[34px] rounded-2xl text-white">
            <h2 className="text-2xl font-bold">Refund & cancellation policy</h2>
            <ul className="mt-4 list-disc list-inside text-lg font-medium">
              <li>Full refund if host cancels the game</li>
              <li>Full refund if you cancel 24+ hours in advance</li>
              <li>Full refund if game is cancelled due to low attendance</li>
            </ul>
            <div className="flex justify-end items-center mt-4">
              <Button
                variant={"link"}
                size={"link"}
                className="text-white no-underline text-base font-normal"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* hosted by  */}
      <div className="border-none">
        <h2>Hosted by</h2>
        <div className="mt-8 px-6 py-[27px] bg-[#4E566B] rounded-2xl text-white flex justify-between items-center gap-4 w-[720px]">
          <div className="flex gap-6 items-center">
            <Avatar className="size-[96px]">
              <AvatarImage src="/images/host-avatar.png" alt="host" />
              <AvatarFallback>HS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl">Alex Mercer</h3>
              <div className="text-base">
                <p>
                  <span className="font-medium">23</span> activities hosted
                </p>
                <p>
                  <span className="font-medium">4.5</span> host rating
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button className="w-[140px] h-[42px] bg-[#FDE8CD] hover:bg-[#FDE8CD]/80 text-base font-medium">
              Message
            </Button>
            <Button
              variant={"outline"}
              className="w-[140px] h-[42px] text-base font-medium rounded-full border-[#FDE8CD] hover:border-[#FDE8CD]/80 text-[#FDE8CD]"
            >
              View profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
