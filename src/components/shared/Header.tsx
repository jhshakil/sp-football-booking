import Image from "next/image";
import DatePicker from "./DatePicker";
import GlobalSearch from "./GlobalSearch";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div className="flex items-center gap-[200px] px-10 py-4 container mx-auto">
      <div>
        <Image width={26} height={34} src={"/images/logo.png"} alt="Logo" />
      </div>
      <div className="flex items-center gap-2">
        <DatePicker />
        <GlobalSearch />
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "w-[146px] h-[50px] rounded-full text-accent ps-3 pe-4 gap-[5px] text-base font-medium"
          )}
        >
          <Image
            width={20}
            height={20}
            src={"/images/leaderboard-icon.png"}
            alt="calender icon"
          />
          Leaderboard
        </Link>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-[50px] rounded-full text-accent px-6 gap-[5px] text-base font-medium border-accent"
          )}
        >
          Login / Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
