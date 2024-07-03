import React from "react";

interface ServiceCardProps {
  heading: string;
  description: string;
}
export const ServiceCard = () => {
  return (
    <div className="w-full p-10 space-y-4 shadow-md">
      <div className="w-[70px] h-[70px] bg-red-900 flex justify-center items-center rounded-sm">
        <h1 className="text-3xl text-white font-bold">01</h1>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl tracking-tighter font-semibold">
          heading for Service Card
        </h1>
        <p className="text-gray-500 leading-6 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit delectus saepe, soluta doloribus nobis earum alias
          cupiditate nesciunt ipsa beatae aliquam deserunt ducimus ea laboriosam
          voluptatibus debitis sequi molestiae consectetur.
        </p>
      </div>
    </div>
  );
};
