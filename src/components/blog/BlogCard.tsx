"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Toggle } from "../ui/toggle";
import { Heart } from "lucide-react";

type Props = {
  title: string;
  date: string;
  location: string;
  price: number;
  available: number;
  total: number;
  booked: number;
  category: string;
  tags: string[];
  images: string[];
};

const BlogCard = ({
  title,
  date,
  location,
  price,
  available,
  total,
  booked,
  category,
  tags,
  images,
}: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };
  return (
    <div className="border rounded-[30px] overflow-hidden">
      <div className="w-full relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent className="aspect-[443/116]">
            {images?.map((image, index) => (
              <CarouselItem key={`blog-image-${title}-${index}-${image}`}>
                <div className="h-full rounded-t-[30px] overflow-hidden">
                  <Image
                    width={895}
                    height={360}
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Slider Image"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-[18px] left-1/2 translate-x-[-50%] flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={`blog-image-${title}-${index}`}
              className={cn(
                "w-[7px] h-[7px] rounded-full bg-[#F6F6F6] transition-all",
                current === index ? "" : "opacity-30"
              )}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : "false"}
            />
          ))}
        </div>
        <div className="absolute top-5 right-5">
          <Toggle
            aria-label="Toggle italic"
            variant={"outline"}
            className="border-0 size-[30px]"
          >
            <Heart
              fill="#4A4A4A"
              stroke="white"
              className="size-6 bg-transparent shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.1)]"
            />
          </Toggle>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between gap-10">
          <div className="flex items-center gap-3">
            {tags?.map((tag, i) => (
              <Badge
                key={`tags-blog-${title}-${i}`}
                variant={"tag-sm"}
                className={cn(i % 2 === 0 ? "bg-[#EFEDFF]" : "bg-[#D9F2E6]")}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <Image
              width={20}
              height={20}
              src={"/images/blog-advance.png"}
              alt="stats icon"
            />
            <p className="text-xs">{category}</p>
          </div>
        </div>
        <h3 className="text-xl lg:text-2xl font-medium text-accent mt-1">
          {title}
        </h3>
        <div className="mt-1">
          <p className="text-sm">{date}</p>
          <div className="flex items-center gap-[5px]">
            <Image
              width={17}
              height={17}
              src={"/images/blog-location.png"}
              alt="location icon"
            />
            <p className="text-sm">{location}</p>
          </div>
        </div>
        <div className="mt-7 text-sm flex justify-between items-end">
          <p>
            {booked}/{total} attending
          </p>
          <div>
            <p className="text-right text-destructive">
              {available} spots left
            </p>
            <div className="mt-1 flex items-center gap-0.5">
              <Image
                width={26}
                height={26}
                src={"/images/currency-icon.png"}
                alt="currency icon"
              />
              <p className="text-2xl">
                {price}
                <span className="text-lg text-[#808080]">/person</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
