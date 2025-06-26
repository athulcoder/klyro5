import Image from "next/image";
import React from "react";

function ServiceCard({ title, image, description }) {
  return (
    <div className="bg-[#2d2d2d] shadow-xl w-[150px] h-[240px] rounded-lg overflow-hidden transition  duration-300 ">
      <div className="w-full h-[120px] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h1 className="text-sm font-semibold text-white">{title}</h1>
        <p className="text-gray-400 text-[12px]">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
