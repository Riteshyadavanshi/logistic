import { ImageSection } from "@/components/image-section";
import { RedirectBtn } from "@/components/redirect-btn";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <ImageSection imageUrl="t5.jpg" label="About us" />
      <div className="md:flex p-2 w-full">
        <div className="p-10 flex-1 space-y-5">
          <h1 className="text-3xl font-bold">About Agarwal Logistics</h1>
          <p className="text-xl text-slate-400">
            Our company trusted worldwide, provides exceptional household moving
            services.
          </p>
          <h1 className="text-2xl font-bold">
            {" "}
            Welcome to <span className="text-red-500">John Logistics</span>
          </h1>
          <p>
            We are the leader in Full Loading Transport, offering a full-range
            of quality moving services that are sure to win trust of our
            customers. We care that you do not put off the idea of moving your
            goods in or out of the city within the country, only because you
            worry how you will cope with the stress that follows shifting your
            belongings and paraphernalia by vehicles.We have made ourselves
            competent enough to pick your consignment from your doorstep from
            any corner of the city which is backed by a well-established and
            well-spread network across the country also we understand that your
            possessions are dear to you, and for it we have a highly specialized
            team,
          </p>
          <RedirectBtn url="/#" label="Read more" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={"/t5.jpg"}
            width={600}
            height={600}
            alt={"truck image"}
            className="rounded-sm h-[350px] animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
