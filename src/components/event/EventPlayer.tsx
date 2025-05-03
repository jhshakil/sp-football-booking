import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const PlayerList = [
  {
    name: "Alex Mercer",
    host: true,
    avatar: "",
    avatarFallback: "AM",
  },
  {
    name: "Jamir Uddin",
    host: false,
    avatar: "",
    avatarFallback: "JU",
  },
  {
    name: "Biplu Ahmed",
    host: false,
    avatar: "",
    avatarFallback: "BA",
  },
  {
    name: "Topu Barman",
    host: false,
    avatar: "",
    avatarFallback: "TB",
  },
  {
    name: "Rakib Hossain",
    host: false,
    avatar: "",
    avatarFallback: "RH",
  },
];

const EventPlayer = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between gap-4 ">
        <h2 className="text-2xl md:text-[32px] font-bold">Players</h2>
        <div className="flex items-center gap-1">
          <Image
            width={32}
            height={32}
            src={"/images/user-group.png"}
            alt="User icon"
          />
          <p className="text-xl md:text-2xl">5/11</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {PlayerList?.map((player, i) => (
          <div
            key={`player-${player.name}-${i}`}
            className="bg-accent p-3 flex justify-between items-center rounded-[14px]"
          >
            <div className="flex items-center gap-[19px]">
              <Avatar className="size-[45px] bg-tertiary">
                <AvatarImage src={player.avatar} alt="@shadcn" />
                <AvatarFallback className="text-lg font-bold text-accent">
                  {player.avatarFallback}
                </AvatarFallback>
              </Avatar>
              <p className="text-xl md:text-2xl font-medium text-tertiary">
                {player.name}{" "}
                {player.host ? (
                  <span className="text-base font-light">(Host)</span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <Button className="bg-white hover:bg-white/80 h-[50px] px-3 rounded-xl text-sm md:text-base font-medium">
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPlayer;
