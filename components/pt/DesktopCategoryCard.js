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
          className="hidden sm:flex shadow-md m-4 "
          style={{ cursor: "pointer" }}
        >
          <div className="w-1/3 xl:w-1/4  relative aspect-square">
            <Image src={imageSrc} alt={imageAlt} layout="fill" />
          </div>
          <div className="p-5 w-full">
            <div className="flex justify-between ">
              <p className="text-lg font-bold ">{title}</p>
              <div className="flex gap-3 yellow">
                <BsFacebook />
                <BsInstagram />
              </div>
            </div>
            <p className="py-5 break-all">{description}</p>
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
