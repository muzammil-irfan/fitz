import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

export default function MobileCategoryCard({
  imageAlt,
  imageSrc,
  title,
  description,
  location,
  amount,
  language,
}) {
  return (
    <div className=" sm:hidden shadow-md m-2">
      <div className="flex " >
        <div className="w-1/3  relative aspect-square">
          <Image src={"/pt/fitness" + imageSrc} alt={imageAlt} layout="fill" />
        </div>
        <div className=" px-5 py-3 w-full">
          <p className="text-lg font-bold ">{title}</p>
          <div className="flex gap-3 yellow py-4 ">
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="break-all">{description}</p>
        <div className="py-2 flex gap-2 items-center">
          <BiMap />
          <p>{location}</p>
        </div>
        <div className="py-2 flex gap-2 items-center">
          <BiDollarCircle />
          <p>{amount} JOD/hr</p>
        </div>
        <div className="py-2 flex gap-2 items-center">
          <TbWorld />
          <p>{language}</p>
        </div>
      </div>
    </div>
  );
}
