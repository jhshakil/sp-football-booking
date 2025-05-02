import React from "react";
import HeroSlider from "./HeroSlider";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2 md:gap-3">
      <div className="md:col-span-2">
        <HeroSlider />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 auto-rows-fr gap-2 md:gap-3">
        <div className="rounded-xl md:rounded-3xl overflow-hidden">
          <Image
            width={453}
            height={174}
            src={"/images/hero-slider-banner-img-2.png"}
            className="w-full h-full object-cover"
            alt="Slider Image"
          />
        </div>
        <div
          className="relative flex-1 rounded-xl md:rounded-3xl overflow-hidden w-full h-full bg-cover bg-no-repeat flex justify-center items-center before:absolute before:inset-0 before:bg-black/40 before:content-[''] before:z-0"
          style={{
            backgroundImage: `url(/images/hero-slider-banner-img-2.png)`,
          }}
        >
          <p className="relative text-2xl md:text-[32px] text-white">
            +2 photos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
