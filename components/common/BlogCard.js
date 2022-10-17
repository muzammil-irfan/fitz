import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ href,imageSrc, category, title, description }) {
  return (
    <Link href={href} passHref>
    <div className="m-2 shadow-md h-[450px] " style={{cursor:"pointer"}}>
      <div className="relative ">
        <Image
          src={imageSrc}
          layout="responsive"
          width="200px"
          height="100px"
          alt=""
        />
      </div>
      <div className="text-left p-3">
        <p className="yellow my-2">{category.toUpperCase()}</p>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="py-5 text-slate-500 text-sx md:text-md">{description}</p>
      </div>
    </div>
    </Link>
  );
}
