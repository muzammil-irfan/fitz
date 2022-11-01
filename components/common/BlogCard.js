import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./CustomImage";

export default function BlogCard({ href,imageSrc, title }) {
  return (
    <Link href={href} passHref>
    <div className="m-2 shadow-md" style={{cursor:"pointer"}}>
      <div className="relative min-h-[200px]">
        <CustomImage
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="text-left p-3">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
    </Link>
  );
}
