"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

import "swiper/css/effect-fade";
import Link from "next/link";

interface ISliderBannerProps {
  image: string;
  name?: string;
  id?: string;
  description?: string;
}

export default function SliderBanner({
  image,
  name,
  id,
  description,
}: ISliderBannerProps) {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        effect="fade"
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="relative ">
          <Image
            src={image}
            alt=""
            width={2000}
            height={2000}
            className="aspect-video max-h-screen w-full"
          />
          {name && (
            <>
              <div className="bg-gradient-to-t from-gray-700 to-transparent opacity-80 duration-300 transition-all group-hover/item:opacity-0 absolute inset-0"></div>
              <div className="absolute uppercase  flex flex-col  top-1/2 left-[15%]   ">
                <div className=" text-white flex flex-col items-end   whitespace-nowrap w-min  rounded-s-none rounded ">
                  <p className="border-b md:text-4xl lg:text-6xl  border-white w-min">
                    {name}
                  </p>
                  <p className="normal-case text-white whitespace-normal  line-clamp-2 w-full  lg:text-base md:text-sm rounded-s-none rounded ">
                    {description}
                  </p>
                </div>

                <Link href={`/${id}`}>
                  <Button className="bg-white/80 hover:bg-white/60 w-min whitespace-nowrap transition-colors duration-300  md:h-5 lg:h-10 md:text-sm lg:text-base rounded-full text-gray-700 ">
                    {" "}
                    Saiba mais{" "}
                  </Button>
                </Link>
              </div>
            </>
          )}
          <div className="absolute bottom-[5%] lg:block hidden left-1/2 animate-bounce">
            <ArrowDown width={64} height={64} className="text-white/60" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
