import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import titleToSlugConverter from "../../utils/titleToSlugConverter";

export default function DesktopCategoryCard({
  href,
  imageAlt,
  imageSrc,
  title,
  description,
  location,
}) {
  return (
    <Link href={href}>
      <a>
        <div
          className="hidden md:flex shadow-xl my-6 "
          style={{ cursor: "pointer" }}
        >
          <div className="w-1/3 xl:w-1/4  relative aspect-square">
            <Image src={imageSrc} alt={imageAlt} layout="fill" />
          </div>
          <div className="p-10 w-full">
            <div className="flex justify-between ">
              <p className="text-2xl font-bold ">{title}</p>
              <div className="flex text-xl gap-5 yellow">
                <BsFacebook />
                <BsInstagram />
              </div>
            </div>
            <p className="py-5 break-all">{description.length > 60 ? description.slice(0,60) + "..." : description }</p>
            <div className="py-2 flex gap-2 items-center">
              <BiMap />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
