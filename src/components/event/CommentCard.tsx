import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  reply?: boolean;
  name: string;
  text: string;
  avatar: string;
  avatarFallback: string;
  time: string;
};

const CommentCard = ({
  reply,
  name,
  text,
  avatar,
  avatarFallback,
  time,
}: Props) => {
  return (
    <div
      className={cn(
        "p-[18px] rounded-[16px]",
        reply ? "bg-tertiary" : "bg-accent"
      )}
    >
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-[19px]">
          <Avatar
            className={cn(
              "size-7 md:size-10",
              reply ? "bg-accent" : "bg-tertiary"
            )}
          >
            <AvatarImage src={avatar} alt="@shadcn" />
            <AvatarFallback
              className={cn(
                "text-xs md:text-lg font-bold",
                reply ? "text-tertiary" : "text-accent"
              )}
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <p
            className={cn(
              "text-lg md:text-2xl font-medium",
              reply ? "text-accent" : "text-tertiary"
            )}
          >
            {name}
          </p>
        </div>
        <div className="flex items-center gap-[14px]">
          <p
            className={cn(
              "text-sm md:text-lg",
              reply ? "text-accent" : "text-tertiary"
            )}
          >
            {time}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  width={22}
                  height={22}
                  src={"/images/dots-vertical.png"}
                  alt="upload"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <p
        className={cn(
          "text-base md:text-xl mt-3",
          reply ? "text-primary" : "text-white"
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default CommentCard;
