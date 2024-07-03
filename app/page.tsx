import { CarouselSection } from "@/components/home/Carousel";
import { ServiceSection } from "@/components/home/service-section";
import { TransparentSection } from "@/components/home/transparent-section";
import { RedirectBtn } from "@/components/redirect-btn";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  const serviceData = ["s", "s", "ds"];
  return (
    <div className="min-w-screen">
      <CarouselSection />
      <ServiceSection serviceData={serviceData} />

      <section className="w-full bg-[#f8f9fa] py-10 md:px-32">
        <div className="bg-[#ffffff]">
          <div className="md:flex p-2 w-full">
            <div className="flex-1">
              <Image
                src={"/logo.png"}
                width={600}
                height={600}
                alt={"image"}
                className="rounded-sm h-[350px]"
              />
            </div>
            <div className="p-10 flex-1 space-y-10">
              <h1 className="text-3xl font-bold">
                {" "}
                We have 25 years of experiences give you better results
              </h1>
              <p className="text-xl text-slate-400">
                We would like to introduce ourselves as a complete
                Courier/Cargo/Logistics management company, which can offer a
                variety of services under one roof by deploying the unique .
              </p>
              <RedirectBtn url="/#" label="Read more" />
            </div>
          </div>
        </div>
      </section>
      <TransparentSection />
    </div>
  );
};

export default HomePage;
