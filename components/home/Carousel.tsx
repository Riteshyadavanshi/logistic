"use client";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
 
import { RedirectBtn } from "../redirect-btn";

export function CarouselSection() {
  const photos = ["/t5.jpg","/t1.jpeg", "/t2.jpeg", "/t3.jpeg"];
  const plugin = useRef(
    Autoplay({
      delay: 2000,
    })
  );
  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="max-w-screen"
        onMouseEnter={() => plugin.current.stop}
        onMouseLeave={() => plugin.current.reset}
      >
        <CarouselContent>
          {photos.map((i, index) => (
            <CarouselItem key={index}>
              <div className=" relative h-[600px] ">
                <div className="absolute z-2 w-screen h-screen   flex  items-center p-10">
                  <div className="space-y-3">
                    <h1 className="text-white text-3xl font-bold">
                      Fast and Secure move is our promise
                    </h1>
                    <RedirectBtn url="contact" label="contact us" />
                  </div>
                </div>
                <Image
                  src={i}
                  width={1000}
                  height={1000}
                  className=" aspect-square    w-full h-full"
                  alt={i}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
