import Image from "next/image";
import React from "react";

function ServiceCard({ title, image, description }) {
  return (
    <div className="bg-gray-800 min-w-[200px] max-w-[300px]  min-lg:w-[240px] shadow-xl h-[310px] min-lg:h-[340px] rounded-lg  transition  duration-300 ">
      <div className="w-full h-[180px] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-2 flex flex-col gap-2 ">
        <h1 className="text-sm font-semibold text-white text-wrap min-lg:text-sm">
          {title}
        </h1>
        <p className="text-gray-500 text-[12px] text-left text-wrap min-lg:text-[13px] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
