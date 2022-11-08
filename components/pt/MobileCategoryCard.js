import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import titleToSlugConverter from "../../utils/titleToSlugConverter";

export default function MobileCategoryCard({
  href,
  imageAlt,
  imageSrc,
  title,
  description,
  location,
}) {
  return (
    <div className=" md:hidden shadow-lg m-2 p-4" style={{cursor:"pointer"}}>
      <Link href={href}>
        <a>
        <div className="flex ">
          <div className="w-1/3 sm:1/2 relative aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
            />
          </div>
          <div className=" pl-6 w-full">
            <p className="text-lg font-bold ">{title}</p>
            <div className="flex text-2xl gap-6 yellow py-4 ">
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="">
          <p className="break-all py-4">{description}</p>
          <div className="pb-2 flex gap-2 items-center">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
        </a>
      </Link>
    </div>
  );
}
