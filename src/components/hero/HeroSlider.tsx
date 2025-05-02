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

const HeroSlider = () => {
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
    <div className="w-full relative rounded-xl md:rounded-3xl overflow-hidden">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent className="aspect-[900/360]">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-full rounded-xl md:rounded-3xl overflow-hidden">
                <Image
                  width={895}
                  height={360}
                  src={"/images/hero-slider-banner-img.png"}
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
            key={index}
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
    </div>
  );
};

export default HeroSlider;
