import React from "react";
import { ServiceCard } from "./service-card";
import { RedirectBtn } from "../redirect-btn";
interface ServiceSectionProps {
  serviceData: string[];
}
export const ServiceSection = ({ serviceData }: ServiceSectionProps) => {
  return (
    <section className="p-4 md:p-10 w-full">
      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold flex justify-center  ">
          Service that we offer
        </h1>
        <h2 className="text-xl font-semibold  flex justify-center text-gray-400">
          Our company trusted worldwide, provides exceptional household moving
          services
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {serviceData.map((i) => (
            <>
              <ServiceCard key={i} />
            </>
          ))}
        </div>
        <div className="flex justify-center">
          <RedirectBtn label="load more" url="services" />
        </div>
      </div>
    </section>
  );
};
