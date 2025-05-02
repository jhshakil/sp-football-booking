import Image from "next/image";
import DatePicker from "./DatePicker";
import GlobalSearch from "./GlobalSearch";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ProfileAction from "./ProfileAction";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center gap-x-3 xl:gap-x-[200px] px-3 xl:px-10 py-4 container mx-auto">
        <div>
          <Link href={"/"}>
            <Image width={26} height={34} src={"/images/logo.png"} alt="Logo" />
          </Link>
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
              "hidden lg:inline-flex w-[146px] h-[50px] rounded-full text-accent ps-3 pe-4 gap-[5px] text-base font-medium"
            )}
          >
            <Image
              width={20}
              height={20}
              src={"/images/leaderboard-icon.png"}
              alt="leaderboard icon"
            />
            Leaderboard
          </Link>
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden lg:inline-flex h-[50px] rounded-full text-accent px-6 gap-[5px] text-base font-medium border-accent"
            )}
          >
            Login / Sign up
          </Link>
          <ProfileAction />
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-4 px-3 py-4 container mx-auto">
        <div className="flex items-center justify-between gap-x-10 ">
          <div>
            <Link href={"/"}>
              <Image
                width={26}
                height={34}
                src={"/images/logo.png"}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "hidden lg:inline-flex w-[146px] h-[50px] rounded-full text-accent ps-3 pe-4 gap-[5px] text-base font-medium"
              )}
            >
              <Image
                width={20}
                height={20}
                src={"/images/leaderboard-icon.png"}
                alt="leaderboard icon"
              />
              Leaderboard
            </Link>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hidden lg:inline-flex h-[50px] rounded-full text-accent px-6 gap-[5px] text-base font-medium border-accent"
              )}
            >
              Login / Sign up
            </Link>
            <ProfileAction />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <DatePicker className="w-full" />
          <GlobalSearch className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Header;
