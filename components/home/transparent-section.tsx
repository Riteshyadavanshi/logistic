import { Globe, Lock, Truck, WholeWord } from "lucide-react";
import Image from "next/image";
import React from "react";

export const TransparentSection = () => {
  return (
    <section className="bg-white  ">
      <div className="bg-white md:flex">
        <div className="flex-1">
          <Image src={"/t1.jpeg"} width={600} height={600} alt="PHOTOS" className="rounded-sm p-2 object-fill aspect-square"/>
        </div>

        {/* card section */}
        <div className="flex-1">
        <div className="px-10 relative   py-5  ">
            <div className="w-[70px] h-[70px] absolute -left-2  top-[45%] md:top-[30%] bg-red-600 flex justify-center items-center">
               <Truck className="w-6 h-6  text-white"/>
            </div>
          <div className="bg-[#edf0f2] p-10 space-y-2 rounded-sm hover:shadow-md hover:border-r-4 border-red-600">
            <h1 className="text-3xl font-bold">Fast Delivery</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              at dicta? Impedit nesciunt earum reru 
            </p>
          </div>
        </div>
        
        <div className="px-10 relative   py-5  ">
            <div className="w-[70px] h-[70px] absolute -left-2  top-[45%] md:top-[30%] bg-red-600 flex justify-center items-center">
               <Lock className="w-6 h-6  text-white  "/>
            </div>
          <div className="bg-[#edf0f2] p-10 space-y-2 rounded-sm hover:shadow-md hover:border-r-4 border-red-600">
            <h1 className="text-3xl font-bold">Secured Service</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              at dicta? Impedit nesciunt earum reru 
            </p>
          </div>
        </div>
        <div className="px-10 relative   py-5  ">
            <div className="w-[70px] h-[70px] absolute -left-2  top-[45%] md:top-[30%] bg-red-600 flex justify-center items-center">
               <Globe className="w-6 h-6  text-white"/>
            </div>
          <div className="bg-[#edf0f2] p-10 space-y-2 rounded-sm hover:shadow-md hover:border-r-4 border-red-600">
            <h1 className="text-3xl font-bold">Worldwide Shipping</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              at dicta? Impedit nesciunt earum reru 
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
