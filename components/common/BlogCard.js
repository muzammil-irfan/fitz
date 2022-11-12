import React from "react";
import Link from "next/link";
import CustomImage from "./CustomImage";

export default function BlogCard({ href, imageSrc, title }) {
  return (
    <div className="m-2 shadow-lg" style={{ cursor: "grab" }}>
      <Link href={href} passHref>
        <div className="relative min-h-[180px] lg:min-h-[200px]  " style={{cursor:"pointer"}}>
          <CustomImage
            src={imageSrc.length < 8 ? "/error.png" : imageSrc}
            alt=""
          />
        </div>
      </Link>
      <div className="text-left px-3 py-5 bg-white">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
  );
}
